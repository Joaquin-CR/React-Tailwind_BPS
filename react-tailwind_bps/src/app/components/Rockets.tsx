import Image from 'next/image';
import RocketMan from '../../assets/img/rocketman.png';
import RocketRide from '../../assets/img/rocketride.png';
import RocketLaunch from '../../assets/img/rocketlaunch.png';
import React from 'react';

const Rockets = () => {
    const content = (
        <section id='rockets' className='p-6 my-12 scroll-mt-20'>
            <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
                Our Rockets
            </h2>
            <ul className='list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8'>
                <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white
                dark:bg-black py-6 px-2 rounded-3xl shadow-xl'>
                    <Image className='w-1/2 mb-6' src={RocketMan} alt='Rocket Man' />
                    <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
                        Explore
                    </h3>
                    <p className='hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                        $
                    </p>
                    <p className='sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                        Afforable Exploration
                    </p>
                </li>
                <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white
                dark:bg-black py-6 px-2 rounded-3xl shadow-xl'>
                    <Image className='w-1/2 mb-6' src={RocketRide} alt='Rocket Ride' />
                    <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
                        Adventure
                    </h3>
                    <p className='hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                        $$
                    </p>
                    <p className='sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                        Best Selling Rocket!
                    </p>
                </li>
                <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white
                dark:bg-black py-6 px-2 rounded-3xl shadow-xl'>
                    <Image className='w-1/2 mb-6' src={RocketLaunch} alt='Rocket Launch' />
                    <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
                        Infinity
                    </h3>
                    <p className='hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                        $$$
                    </p>
                    <p className='sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                        Luxury Starship
                    </p>
                </li>
            </ul>
        </section>
    )
    return content
}

export default Rockets