import React from 'react'

const Header = () => {

  const content = (
    <div className='bg-teal-700 text-white sticky top-0 z-10'>
      <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
        <h1 className='text-3xl font-medium'>
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
          <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
            &#9776;
          </button>
          <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
            <a className="hover:opacity-90" href="#rockets">Our Rockets</a>
            <a className="hover:opacity-90" href="#testimonials">Testimonials</a>
            <a className="hover:opacity-90" href="#contact">Contact Us</a>
          </nav>
        </div>
      </section>
    </div>
  )
  return content;
}

export default Header