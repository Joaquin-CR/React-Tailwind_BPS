import React from 'react'
import Hero from './Hero'
import Rockets from './Rockets'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Main = () => {
    const content = (
        <main className='max-w-4xl mx-auto mt-5'>
            <Hero/>
            <hr className='mx-auto bg-black dark:bg-white w-1/2'/>
            <Rockets/>
            <hr className='mx-auto bg-black dark:bg-white w-1/2'/>
            <Testimonials/>
            <hr className='mx-auto bg-black dark:bg-white w-1/2'/>
            <Contact/>
        </main>
    )
    return content
}

export default Main