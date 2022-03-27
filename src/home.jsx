import React from 'react'
import cover from './cover.svg'
import Logo from './logo.svg'
import toast, { Toaster } from 'react-hot-toast';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
    const notify = () => toast.custom((t) => (
        <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                        <img
                            className="h-10 w-10 rounded-full shadow-md p-1"
                            src={Logo}
                            alt=""
                        />
                    </div>
                    <div className="ml-3 flex-1">
                        <p className="text-md  font-medium text-gray-900">
                            Book store
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            Reminder:Application Demo!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Close
                </button>
            </div>
        </div>
    ))
    useEffect(() => {
        notify()
    }, [])

    return (
        <main >
            <div className='max-w-sm  px-4 sm:px-0  sm:max-w-5xl h-[90vh] mx-auto  grid  sm:gap-10 gap-4 place-content-center place-items-center  sm:grid-cols-2'>
                <div className='mb-8 sm:ml-4 text-center sm:text-left order-2 sm:order-1'>
                    <h2 className='title sm:text-5xl text-3xl mb-5'>
                        Free Guide to Publishing
                    </h2>
                    <Toaster />

                    <p className='text-lg '>if you would like to learn more about publishing <em className='ml-2 text-white'>,self publishing,</em>  marketing and promotion for you book.</p>
                    <Link to="/book">
                        <button className='inline-flex text-center text-white text-lg ml-4 px-5 mt-5 py-3 shadow-sm rounded-lg transition ease-linear delay-100 bg-violet-500 hover:translate-x-1 hover:scale-100 hover:bg-purple-500 duration-300'>
                            Get Start</button>
                    </Link>
                </div>
                <div className='order-1 sm:order-2 sm:mr-4'>
                    <img loading='lazy' role={'banner'} className='w-3/4 mx-auto sm:w-full object-cover scale-75 sm:scale-125' src={cover} alt="Get your New Book Collection" />
                </div>
            </div>
        </main>
    )
}

export default Home