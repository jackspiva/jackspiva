import React from 'react'

interface Props {}

export default function Footer({}: Props) {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="pt-8 mt-12 border-t border-gray-700">
          <p className="text-base text-gray-400 xl:text-center">
            Jack Spiva &copy; 2021
          </p>
        </div>
      </div>
    </footer>
  )
}
