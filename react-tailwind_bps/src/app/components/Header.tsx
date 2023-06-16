'use client';
import React from 'react'

const Header = () => {

  const hamburger = document.getElementById('hamburger-button') as HTMLElement;

  const mobileMenu = document.getElementById('mobile-menu') as HTMLButtonElement;

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    hamburger.classList.toggle('toggle-btn');
  }

  const content = (
    <>
      <header className='bg-teal-700 text-white sticky top-0 z-10'>
        <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
          <h1 className='text-3xl font-medium'>
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <div>
            <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer relative w-8 h-8" onClick={toggleMenu}>
              {/* &#9776; */}
              <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:contect-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:contect-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
            </button>
            <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
              <a className="hover:opacity-90" href="#rockets">Our Rockets</a>
              <a className="hover:opacity-90" href="#testimonials">Testimonials</a>
              <a className="hover:opacity-90" href="#contact">Contact Us</a>
            </nav>
          </div>
        </section>
        <section id='mobile-menu' className='absolute top-68 bg-black w-full text-5xl flex-col justify-center origin-top animate-open-menu hidden'>
          {/* <button className='text-8xl self-end px-6' onClick={toggleMenu}>
            &times;
          </button> */}
          <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
            <a className="w-full text-center py-6 hover:opacity-90" href="#hero" onClick={toggleMenu}>Home</a>
            <a className="w-full text-center py-6 hover:opacity-90" href="#rockets" onClick={toggleMenu}>Our Rockets</a>
            <a className="w-full text-center py-6 hover:opacity-90" href="#testimonials" onClick={toggleMenu}>Testimonials</a>
            <a className="w-full text-center py-6 hover:opacity-90" href="#contact" onClick={toggleMenu}>Contact Us</a>
            <a className="w-full text-center py-6 hover:opacity-90" href="#footer" onClick={toggleMenu}>Legal</a>
          </nav>
        </section>
      </header>
    </>
  )
  return content;
}

export default Header