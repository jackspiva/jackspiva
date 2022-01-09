import React from 'react'

interface Props {}

export default function Footer({}: Props) {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:py-16">
        <div className="pt-8 mt-12 border-t border-gray-700">
          <div className="flex justify-end max-w-3xl mx-auto">
            <p className="text-base text-gray-400 xl:text-center">
              Jack Spiva &copy; 2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
