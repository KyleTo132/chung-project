import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import Thai from '../assets/projects/thai.png'

const Works = () => {
  return (
    <div name='works' className='w-full md:h-screen text-gray-800 bg-[#eeecec]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 text-gray-800 border-gray-800'>Works</p>
                <p className='py-6'>Check out some of ours recent works</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${WorkImg})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${Thai})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${WorkImg})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${Thai})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${WorkImg})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${Thai})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${WorkImg})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${Thai})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${WorkImg})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${Thai})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${WorkImg})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Items */}
                <div    name='card-item' 
                        style={{backgroundImage: `url(${Thai})`}} 
                        className='shadow-lg shadow-[#babcbe] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <p className='text-center text-white font-bold text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                                    incididunt ut labore et dolore magna aliqua....</p>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>
                
            {/* End of Grid */}
            </div>
        </div>
    </div>
  )
}

export default Works