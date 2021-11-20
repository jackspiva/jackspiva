import Page from '@components/Page'
import Project from '@components/Project'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Page>
      <div className="self-center max-w-2xl">
        <h1 className="text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
          Jack Spiva
        </h1>

        <p className="pt-4 prose text-gray-800 dark:text-gray-300">
          Nashville based software engineer mainly focused on Ruby on Rails and
          React. Interested in most things, especially music, video games,
          reading, and being outside.
        </p>
        <div className="py-8" />
        <div className="">
          <h3 className="pb-4 text-lg font-medium text-gray-900 dark:text-gray-200">
            Building
          </h3>
          <Project
            title="vocesdenashville.com"
            year="2021"
            url="https://www.vocesdenashville.com/"
            summary="Building a website for Voces, a women-owned cooperative that trains workers, mothers, and other Latinx community members to teach Spanish classes around our city."
          />
          <Project
            title="jackspiva.dev"
            year="2021"
            url="https://www.jackspiva.dev/"
            summary="Continuing to grow and evolve this site."
          />
          <Project
            title="chapchair.com"
            year="2020"
            url="https://www.chapchair.com"
            summary="Building a custom Shopify storefront for Chapchair. Chapchairs are plastic containers specially adapted to receive and hold lip balm tubes."
          />
        </div>
      </div>
    </Page>
  )
}

export default Home
