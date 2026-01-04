
/**
 * @file Lightweight analytics overview widget using static sample data.
 */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

/**
 * Static sample analytics datapoint.
 */
interface AnalyticsPoint {
  /** Label for the time period. */
  label: string
  /** Number of tracked clicks. */
  clicks: number
  /** Number of conversions attributed. */
  conversions: number
}

/**
 * Sample weekly performance data for display on the home page.
 */
const data: AnalyticsPoint[] = [
  { label: 'Week 1', clicks: 420, conversions: 32 },
  { label: 'Week 2', clicks: 610, conversions: 48 },
  { label: 'Week 3', clicks: 890, conversions: 71 },
  { label: 'Week 4', clicks: 1020, conversions: 84 }
]

/**
 * Compact analytics visualization showcasing click and conversion trends.
 * Intended as a preview for future full analytics dashboards.
 */
export function AnalyticsOverview() {
  const totalClicks = data.reduce((sum, item) => sum + item.clicks, 0)
  const totalConversions = data.reduce((sum, item) => sum + item.conversions, 0)
  const overallCr = totalClicks ? (totalConversions / totalClicks) * 100 : 0

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
            Affiliate performance snapshot
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Example weekly clicks and conversions across all featured creators.
          </p>
        </div>
        <div className="hidden flex-col items-end text-right text-xs text-slate-500 md:flex">
          <span className="font-medium text-slate-700">
            {totalClicks.toLocaleString()} clicks
          </span>
          <span>{totalConversions.toLocaleString()} conversions</span>
          <span>{overallCr.toFixed(1)}% conv. rate</span>
        </div>
      </div>
      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: '#64748B' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: '#64748B' }}
            />
            <Tooltip
              contentStyle={{ fontSize: 12, borderRadius: 10, borderColor: '#E2E8F0' }}
            />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#0F766E"
              strokeWidth={2}
              dot={false}
              name="Clicks"
            />
            <Line
              type="monotone"
              dataKey="conversions"
              stroke="#F97316"
              strokeWidth={2}
              dot={false}
              name="Conversions"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
