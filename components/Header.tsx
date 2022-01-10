import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { RoughNotation } from 'react-rough-notation'
import DarkModeButton from './DarkModeButton'
import Link from 'next/link'

interface Props {
  animate?: boolean
}

export default function Header({ animate = false }: Props) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="self-center max-w-3xl mx-auto">
      <div className="flex justify-between py-2">
        <Link href="/">
          <a>
            <RoughNotation
              animationDuration={animate ? 600 : undefined}
              animate={animate}
              type="highlight"
              show={true}
              color={resolvedTheme === 'dark' ? '#9333ea' : '#e9d5ff'}
            >
              <h1 className="inline-block px-2 -ml-2 text-lg font-bold text-gray-900 md:text-2xl dark:text-gray-100">
                Jack Spiva
              </h1>
            </RoughNotation>
          </a>
        </Link>
        <DarkModeButton
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          mounted={mounted}
          resolvedTheme={resolvedTheme}
        />
      </div>
    </div>
  )
}
