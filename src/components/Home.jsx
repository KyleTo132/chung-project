import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#eeecec]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'> 
            <p className='text-[#474747]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#000000]'>KD Nguyen</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#524f4f]'>Together we are Chung</h2>
            <p className='text-[#474747] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>
                <button className=' text-grey-800 group border-black 
                                    border-2 px-6 py-3 my-2 
                                    flex items-center 
                                    hover:bg-gray-800 hover:border-gray-600 hover:text-white'>
                                        View Works
                                        <span className='group-hover:rotate-90 duration-300'>
                                            <HiArrowNarrowRight className='ml-3'/>
                                        </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home