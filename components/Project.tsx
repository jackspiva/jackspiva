import { ExternalLinkIcon } from '@heroicons/react/solid'
import Link from 'next/link'
interface Props {
  title: string
  year: string
  url: string
  summary: string
  type?: string
}

export default function Project({
  title,
  year,
  url,
  summary,
  type = 'project',
}: Props) {
  return (
    <Link href={url}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 font-normal text-gray-900 text-md dark:text-gray-100">
              {title}&nbsp;
              <span
                className={
                  type === 'project'
                    ? 'font-mono text-xs text-[#ea580c]'
                    : 'font-mono text-xs text-[#65a30d]'
                }
              >
                {`{`}
                {type}
                {`}`}
              </span>
            </h4>
            <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {year}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  )
}
