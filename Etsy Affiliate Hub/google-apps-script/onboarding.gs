/**
 * @file Google Apps Script for logging Etsy Affiliate Hub onboarding submissions
 * into the "Etsy_Affiliate_Hub_Onboarding_Database" Google Sheet.
 *
 * Deploy this file as a Web App (Execute as: Me, Who has access: Anyone with the link)
 * and POST form or JSON data to it from your frontend.
 */

const SPREADSHEET_ID = '1G6P9-tcM_kidnykds4c6la_WC2WUZf5MNC9nAvU-W1I'
const SHEET_NAME = 'Sheet1' // Change this to match the tab name that holds your columns

/**
 * Returns the sheet used to store onboarding submissions.
 *
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Target sheet instance.
 */
function getOnboardingSheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID)
  const sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    throw new Error(
      'Onboarding sheet not found. Please create a sheet named "' +
        SHEET_NAME +
        '" or update SHEET_NAME in the script.'
    )
  }
  return sheet
}

/**
 * Ensures the header row matches the expected onboarding columns.
 * If the sheet is empty, it will create the header row automatically.
 */
function ensureHeaderRow_() {
  const sheet = getOnboardingSheet_()
  const lastRow = sheet.getLastRow()
  const expectedHeaders = [
    'Name / brand',
    'Contact email',
    'Primary promotion channel',
    'Monthly reach (rough estimate)',
    'Preferred niches & creators',
    'Date Submitted'
  ]

  if (lastRow === 0) {
    sheet.appendRow(expectedHeaders)
    return
  }

  const existingHeaders = sheet.getRange(1, 1, 1, expectedHeaders.length).getValues()[0]
  const normalizedExisting = existingHeaders.map((h) => String(h || '').trim())
  const normalizedExpected = expectedHeaders.map((h) => h.trim())

  const headersMatch =
    normalizedExisting.length === normalizedExpected.length &&
    normalizedExisting.every((value, index) => value === normalizedExpected[index])

  if (!headersMatch) {
    // Do not overwrite; just log a warning in case there is a mismatch.
    console.warn(
      'Header row does not match expected columns. Existing: ' +
        JSON.stringify(normalizedExisting) +
        ', Expected: ' +
        JSON.stringify(normalizedExpected)
    )
  }
}

/**
 * Creates a JSON HTTP response.
 *
 * @param {Object} payload JSON-serializable payload.
 * @param {number} [statusCode=200] Optional HTTP status.
 * @returns {GoogleAppsScript.Content.TextOutput} JSON response.
 */
function createJsonResponse_(payload, statusCode) {
  const output = ContentService.createTextOutput()
  output.setMimeType(ContentService.MimeType.JSON)
  output.setContent(JSON.stringify(payload))
  if (statusCode && output.setResponseCode) {
    // setResponseCode is available in newer runtimes; guard for safety.
    output.setResponseCode(statusCode)
  }
  return output
}

/**
 * Optional GET endpoint to verify that the Web App is deployed and reachable.
 *
 * @param {GoogleAppsScript.Events.DoGet} e Request event object.
 * @returns {GoogleAppsScript.Content.TextOutput} JSON status payload.
 */
function doGet(e) {
  return createJsonResponse_({
    ok: true,
    message: 'Etsy Affiliate Hub onboarding endpoint is live.',
    method: 'GET'
  })
}

/**
 * Handles POST requests from the onboarding form.
 * Accepts either JSON (application/json) or standard form-encoded payloads.
 *
 * Expected fields:
 * - name          (maps to "Name / brand")
 * - email         (maps to "Contact email")
 * - primaryChannel
 * - monthlyReach
 * - niches        (maps to "Preferred niches & creators")
 *
 * @param {GoogleAppsScript.Events.DoPost} e Request event object.
 * @returns {GoogleAppsScript.Content.TextOutput} JSON response.
 */
function doPost(e) {
  try {
    ensureHeaderRow_()
    const sheet = getOnboardingSheet_()

    // Parse incoming data depending on content type
    const data = parseRequestData_(e)

    const name = (data.name || '').trim()
    const email = (data.email || '').trim()
    const primaryChannel = (data.primaryChannel || '').trim()
    const monthlyReach = (data.monthlyReach || '').trim()
    const niches = (data.niches || '').trim()

    const missingFields = []
    if (!name) missingFields.push('name')
    if (!email) missingFields.push('email')
    if (!primaryChannel) missingFields.push('primaryChannel')
    if (!monthlyReach) missingFields.push('monthlyReach')
    if (!niches) missingFields.push('niches')

    if (missingFields.length > 0) {
      return createJsonResponse_(
        {
          ok: false,
          error: 'Missing required fields: ' + missingFields.join(', ')
        },
        400
      )
    }

    const timestamp = new Date()
    const row = [name, email, primaryChannel, monthlyReach, niches, timestamp]

    sheet.appendRow(row)

    return createJsonResponse_({
      ok: true,
      message: 'Onboarding submission recorded successfully.',
      submittedAt: timestamp.toISOString()
    })
  } catch (error) {
    console.error('Error handling onboarding submission', error)
    return createJsonResponse_(
      {
        ok: false,
        error: 'Internal error while recording submission.'
      },
      500
    )
  }
}

/**
 * Parses incoming request data from a doPost event.
 * Supports application/json and form-encoded payloads.
 *
 * @param {GoogleAppsScript.Events.DoPost} e Request event.
 * @returns {Object} Parsed key-value pairs.
 */
function parseRequestData_(e) {
  if (!e || !e.postData) {
    return {}
  }

  const contentType = (e.postData.type || '').toLowerCase()
  const raw = e.postData.contents || ''

  // If JSON, parse and return
  if (contentType.indexOf('application/json') !== -1) {
    try {
      return JSON.parse(raw)
    } catch (jsonError) {
      console.warn('Failed to parse JSON body; falling back to parameters.', jsonError)
    }
  }

  // Fallback: use URL-encoded parameters (e.parameter)
  const params = e.parameter || {}
  const result = {}

  // Normalize keys we care about
  const mappings = {
    name: ['name', 'Name', 'Name / brand'],
    email: ['email', 'Email', 'Contact email'],
    primaryChannel: ['primaryChannel', 'Primary promotion channel'],
    monthlyReach: ['monthlyReach', 'Monthly reach (rough estimate)'],
    niches: ['niches', 'Preferred niches & creators']
  }

  Object.keys(mappings).forEach(function (key) {
    const aliases = mappings[key]
    for (var i = 0; i < aliases.length; i++) {
      var alias = aliases[i]
      if (params[alias] !== undefined) {
        result[key] = params[alias]
        break
      }
    }
  })

  return result
}