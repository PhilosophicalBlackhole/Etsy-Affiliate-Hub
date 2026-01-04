
/**
 * @file Blog and resources page for affiliate marketing best practices.
 */

import { useMemo, useState } from 'react'
import { Section } from '../components/common/Section'
import { PageHeader } from '../components/common/PageHeader'
import { blogPosts, type BlogPost } from '../data/blogPosts'

/**
 * Blog/resources page rendering curated educational content for affiliates.
 */
export default function BlogPage() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(
    blogPosts[0]?.slug ?? null
  )

  const selectedPost: BlogPost | undefined = useMemo(
    () => blogPosts.find((post) => post.slug === selectedSlug) ?? blogPosts[0],
    [selectedSlug]
  )

  return (
    <Section variant="subtle">
      <PageHeader
        eyebrow="Resources"
        title="Playbooks for promoting Etsy creators as an affiliate."
        description={
          <>
            Learn how to choose the right creators, structure campaigns, and turn Etsy
            product recommendations into a reliable revenue stream. These guides are
            written for both new and experienced affiliate marketers.
          </>
        }
      />

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
        <aside className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Articles
          </h2>
          <ul className="space-y-2">
            {blogPosts.map((post) => {
              const isActive = post.slug === selectedPost?.slug
              return (
                <li key={post.slug}>
                  <button
                    type="button"
                    onClick={() => setSelectedSlug(post.slug)}
                    className={`w-full rounded-2xl border px-3 py-3 text-left text-xs transition-colors ${
                      isActive
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                      {post.category}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{post.title}</p>
                    <p className="mt-1 line-clamp-2 text-[11px] text-slate-500">
                      {post.excerpt}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      {post.readTimeMinutes} min read
                    </p>
                  </button>
                </li>
              )
            })}
          </ul>
        </aside>

        {selectedPost && (
          <article className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm md:p-6">
            <header className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                {selectedPost.category}
              </p>
              <h2 className="text-lg font-semibold text-slate-900">
                {selectedPost.title}
              </h2>
              <p className="text-xs text-slate-500">
                Published {new Date(selectedPost.publishedAt).toLocaleDateString()} ·{' '}
                {selectedPost.readTimeMinutes} min read
              </p>
            </header>
            <div className="space-y-3">
              {selectedPost.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <section className="mt-3 rounded-2xl bg-slate-50 p-4 text-xs text-slate-700">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-900">
                Key takeaways
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                {selectedPost.keyTakeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </section>
          </article>
        )}
      </div>
    </Section>
  )
}
