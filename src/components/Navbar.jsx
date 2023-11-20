import React, {useState} from 'react'
import {FaBars, FaTimes, FaInstagram, FaAccessibleIcon, FaFacebook, FaBehanceSquare} from 'react-icons/fa'
import {Link} from 'react-scroll'


import Logo from '../assets/brands/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '50px'}} />
        </div>

        {/* Menu */}

        <ul className='hidden md:flex'>
            <li>
                <Link 
                    to="home" 
                    smooth={true} 
                    duration={500} 
                    >
                    Home
                </Link>
            </li>
            <li>
            <Link 
                    to="about" 
                    smooth={true} 
                    duration={500} 
                    >
                    About
                </Link>
            </li>
            <li>
            <Link 
                    to="brands" 
                    smooth={true} 
                    duration={500} 
                    >
                    Brands
                </Link>
            </li>
            <li>
            <Link 
                    to="works" 
                    smooth={true} 
                    duration={500} 
                    >
                    Works
                </Link>
            </li>
            <li>
            <Link 
                    to="contact" 
                    smooth={true} 
                    duration={500} 
                    >
                    Contact
                </Link>
            </li>
        </ul>


        {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10' >
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link 
                        onClick={handleClick}
                        to="home" 
                        smooth={true} 
                        duration={500} 
                        >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick} 
                        to="about" 
                        smooth={true} 
                        duration={500} 
                        >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link 
                        onClick={handleClick}
                        to="brands" 
                        smooth={true} 
                        duration={500} 
                        >
                        Brands
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link 
                        onClick={handleClick}
                        to="works" 
                        smooth={true} 
                        duration={500} 
                        >
                        Works
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link 
                        onClick={handleClick}
                        to="contact" 
                        smooth={true} 
                        duration={500} 
                        >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%]' left-0>
                <li className=' w-[160px] h-[60px] 
                                flex justify-between items-center 
                                ml-[-115px] hover:ml-[-20px] duration-300 
                                bg-blue-500'>
                    <a  className='flex justify-between items-center w-full text-gray'
                    href="/">
                        Behance <FaBehanceSquare size={30}/>
                    </a>
                </li>
                <li className=' w-[160px] h-[60px] 
                                flex justify-between items-center 
                                ml-[-115px] hover:ml-[-20px] duration-300 
                                bg-gradient-to-r from-purple-500 to-orange-400'>
                    <a  className='flex justify-between items-center w-full text-gray'
                    href="/">
                        Instagram <FaInstagram size={30}/>
                    </a>
                </li>
                <li className=' w-[160px] h-[60px] 
                                flex justify-between items-center 
                                ml-[-115px] hover:ml-[-20px] duration-300 
                                bg-blue-600'>
                    <a  className='flex justify-between items-center w-full text-gray'
                    href="/">
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className=' w-[160px] h-[60px] 
                                flex justify-between items-center 
                                ml-[-115px] hover:ml-[-20px] duration-300 
                                bg-green-600'>
                    <a  className='flex justify-between items-center w-full text-gray'
                    href="/">
                        Email <FaAccessibleIcon size={30}/>
                    </a>
                </li>
            </div>
    </div>
  )
}

export default Navbar