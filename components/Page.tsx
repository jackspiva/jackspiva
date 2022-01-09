import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'

interface PageProps {
  children: React.ReactNode
  customMeta?: { published_time: string }
}

export default function Page(props: PageProps) {
  const { children, customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Jack Spiva',
    description: "Jack Spiva's personal website",
    image: 'https://jackspiva.dev/static/images/banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://jacksipva.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://jackspiva.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Jack Spiva" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jackspiva" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.published_time && (
          <meta
            property="article:published_time"
            content={meta.published_time}
          />
        )}
      </Head>
      <div className="flex flex-col justify-center px-8">
        <nav className="relative flex items-center justify-between w-full max-w-3xl pt-8 pb-8 mx-auto text-gray-900 bg-gray-100 border-gray-200 dark:border-gray-700 sm:pb-16 dark:bg-gray-800 bg-opacity-60 dark:text-gray-100">
          <a
            href="#skip"
            className="absolute px-4 py-3 transition-transform duration-200 transform -translate-y-12 left-12 focus:top-4 focus:translate-y-3 -top-8"
          >
            Skip to content
          </a>
        </nav>
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-100 dark:bg-gray-800"
      >
        {children}
        <Footer />
      </main>
    </div>
  )
}
