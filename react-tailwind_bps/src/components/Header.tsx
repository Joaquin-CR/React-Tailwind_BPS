'use client';
import React, { useState } from 'react'

const Header = () => {

  const [effect, setEffect] = useState(false);
  const [show, setShow] = useState(false);

  // const toggleMenu = () => {
  //   const hamburger = document.getElementById('hamburger-button') as HTMLButtonElement;
  //   const mobileMenu = document.getElementById('mobile-menu') as HTMLButtonElement;
  //   hamburger.classList.toggle('toggle-btn');
  //   mobileMenu.classList.toggle('hidden');
  //   mobileMenu.classList.toggle('flex');
  // }

  const content = (
    <>
      <header className='bg-teal-700 text-white sticky top-0 z-10'>
        <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
          <h1 className='text-3xl font-medium'>
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <div>
            <button id="hamburger-button" className={`${effect && "toggle-btn"} text-3xl md:hidden cursor-pointer relative w-8 h-8`} onClick={() => {setEffect(effect ? false : true); setShow(show ? false : true);}}>
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
        <section id='mobile-menu' className={`${show && "animate-open-menu"} ${!show && "hidden flex"}absolute top-68 bg-black w-full text-5xl flex-col justify-center origin-top`}>
          {/* <button className='text-8xl self-end px-6' onClick={toggleMenu}>
            &times;
          </button> */}
          <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
            <a className="w-full text-center py-6 hover:opacity-90" href="#hero" onClick={() => {setEffect(false); setShow(show ? false : true);}}>Home</a>
            <a className="w-full text-center py-6 hover:opacity-90" href="#rockets" onClick={() => {setEffect(false); setShow(show ? false : true);}}>Our Rockets</a>
            <a className="w-full text-center py-6 hover:opacity-90" href="#testimonials" onClick={() => {setEffect(false); setShow(show ? false : true);}}>Testimonials</a>
            <a className="w-full text-center py-6 hover:opacity-90" href="#contact" onClick={() => {setEffect(false); setShow(show ? false : true);}}>Contact Us</a>
            <a className="w-full text-center py-6 hover:opacity-90" href="#footer" onClick={() => {setEffect(false); setShow(show ? false : true);}}>Legal</a>
          </nav>
        </section>
      </header>
    </>
  )
  return content;
}

export default Header