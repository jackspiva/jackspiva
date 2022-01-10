import { parseISO, format } from 'date-fns'
import type { PropsWithChildren } from 'react'
import type { Blog } from '.contentlayer/types'
import Page from '@components/Page'

export default function BlogLayout({
  children,
  post,
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Page showHeader={true} animateHeader={false}>
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Jack Spiva / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>
        <div className="w-full mt-4 prose dark:text-white dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </Page>
  )
}
