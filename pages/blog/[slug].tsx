import { useMDXComponent } from 'next-contentlayer/hooks'
import BlogLayout from '../../layouts/BlogLayout'
import { allBlogs } from '.contentlayer/data'
import type { Blog } from '.contentlayer/types'
import Link from 'next/link'

const CustomLink = (props: any) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} className="text-black dark:text-white">
          {props.children}
        </a>
      </Link>
    )
  }
  return (
    <a
      target="_blank"
      className="text-black dark:text-white"
      rel="noopener noreferrer"
      {...props}
    />
  )
}

export default function Post({ post }: { post: Blog }) {
  const Component = useMDXComponent(post.body.code)

  return (
    <BlogLayout post={post}>
      <Component
        components={{
          a: CustomLink,
          code: (props: any) => (
            <code {...props} className="text-black dark:text-white" />
          ),
        }}
      />
    </BlogLayout>
  )
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const post = allBlogs.find((post) => post.slug === params.slug)

  return { props: { post } }
}
