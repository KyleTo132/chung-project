import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#eeecec] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/0696dc29-8298-4f03-8b97-9764182e610a" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black text-gray-800'> 
                    Contact
                </p>
                <p className='text-black py-4'>Will send directly to myEmail@gamil.example.com</p>
            </div>
            <input className='bg-[#dadada] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#dadada]' type="email" placeholder="Email" name="email"/>
            <textarea className='p-2 bg-[#dadada]'  name="message" rows="10" placeholder='Message'/>
            <button className='text-black border-black border-2 hover:bg-black hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
        </form>
    </div>
  )
}

export default Contact