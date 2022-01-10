import Page from '@components/Page'
import Project from '@components/Project'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import Header from '@components/Header'

const Home: NextPage = () => {
  const { resolvedTheme } = useTheme()

  return (
    <Page showHeader={false} animateHeader={false}>
      <RoughNotationGroup>
        <div className="self-center max-w-3xl">
          <Header />
          <div className="pt-12">
            <p className="text-lg text-gray-700 dark:text-gray-300">
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
                {PROJECTS.map((project) => (
                  <Project
                    key={project.slug}
                    {...project}
                    url={
                      project.type === 'project' ? project.url : project.slug
                    }
                  />
                ))}
              </div>
            </RoughNotation>
          </div>
        </div>
      </RoughNotationGroup>
    </Page>
  )
}

export default Home

interface Project {
  slug: string
  title: string
  year: string
  url: string
  summary: string
  type?: string
}

const PROJECTS: Project[] = [
  {
    slug: 'voces',
    title: 'vocesdenashville.com',
    year: '2021',
    url: 'https://www.vocesdenashville.com/',
    summary:
      'Building a website for Voces, a women-owned cooperative that trains workers, mothers, and other Latinx community members to teach Spanish classes around our city.',
    type: 'project',
  },
  {
    slug: 'jackspiva',
    title: 'jackspiva.dev',
    year: '2021',
    url: 'https://www.jackspiva.dev/',
    summary: 'Continuing to grow and evolve this site.',
    type: 'project',
  },
  {
    slug: 'chapchair',
    title: 'chapchair.com',
    year: '2020',
    url: 'https://www.chapchair.com',
    summary:
      'Building a custom Shopify storefront for Chapchair. Chapchairs are plastic containers specially adapted to receive and hold lip balm tubes.',
    type: 'project',
  },
  {
    slug: 'justinjones',
    title: 'justinjones2020.com',
    year: '2020',
    url: 'https://justinjones2020.com/',
    summary: 'Built a website for the Justin Jones 2020 congress campaign.',
    type: 'project',
  },
  {
    slug: 'using-activerecord-select-instead-of-pluck',
    title: 'Using Select Instead of Pluck in ActiveRecord Queries',
    year: '2019',
    url: 'https://www.chapchair.com',
    summary:
      'Building a custom Shopify storefront for Chapchair. Chapchairs are plastic containers specially adapted to receive and hold lip balm tubes.',
    type: 'post',
  },
]
