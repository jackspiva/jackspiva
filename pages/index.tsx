import Page from '@components/Page'
import Project from '@components/Project'
import DarkModeButton from '@components/DarkModeButton'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])
  return (
    <Page>
      <RoughNotationGroup>
        <div className="self-center max-w-3xl">
          <div className="flex justify-between py-2">
            <RoughNotation
              animationDuration={600}
              type="highlight"
              show={true}
              color={resolvedTheme === 'dark' ? '#9333ea' : '#e9d5ff'}
            >
              <h1 className="inline-block px-2 -ml-2 text-lg font-bold text-gray-900 md:text-2xl dark:text-gray-100">
                Jack Spiva
              </h1>
            </RoughNotation>
            <DarkModeButton
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
              mounted={mounted}
              resolvedTheme={resolvedTheme}
            />
          </div>
          <div className="pt-8">
            <p className="pt-4 text-lg text-gray-700 dark:text-gray-300">
              <RoughNotation
                animationDuration={600}
                type="underline"
                show={true}
                color="#2563eb"
              >
                Nashville
              </RoughNotation>
              &nbsp;based software engineer mainly focused on&nbsp;&nbsp;
              <RoughNotation
                animationDuration={600}
                type="box"
                show={true}
                color="#166534"
              >
                Ruby on Rails and React.
              </RoughNotation>
            </p>
            <div className="py-8" />
            <RoughNotation
              animationDuration={600}
              type="bracket"
              show={true}
              color={resolvedTheme === 'dark' ? '#94a3b8' : '#475569'}
            >
              <div>
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
                <Project
                  title="justinjones2020.com"
                  year="2020"
                  url="https://justinjones2020.com/"
                  summary="Built a website for Justin Jones 2020 congress campaign."
                />
                <Project
                  title="Using Select Instead of Pluck in ActiveRecord Queries"
                  year="2019"
                  url="https://www.chapchair.com"
                  summary="Building a custom Shopify storefront for Chapchair. Chapchairs are plastic containers specially adapted to receive and hold lip balm tubes."
                  type="post"
                />
              </div>
            </RoughNotation>
          </div>
        </div>
      </RoughNotationGroup>
    </Page>
  )
}

export default Home
