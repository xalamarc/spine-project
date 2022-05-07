import React from 'react'
import sun from '../assets/sun.svg'

const nav = () => {
  return (
    <nav className='fixed top-0 flex items-center justify-center w-full'>
      <div className='flex items-center w-full p-4 md:w-880 bg-primary rounded-2xl'>
        <p className='pr-20 text-2xl text-secondary'>&lt; Sergio Rojas &gt;</p>

        <div className='items-center flex-1 hidden gap-6 ml-6 md:flex'>
          <a
            href='#home'
            className='text-lg hover-underline-animation text-secondary'
          >
            Home
          </a>
          <a
            href='#about'
            className='text-lg hover-underline-animation text-secondary'
          >
            About
          </a>
          <a
            href='#projects'
            className='text-lg hover-underline-animation text-secondary'
          >
            Projects
          </a>
          <a
            href='#contacts'
            className='text-lg hover-underline-animation text-secondary'
          >
            Contact
          </a>
          <button className='px-3 py-3 font-bold rounded-lg bg-button hover:bg-hover'>
            <img src={sun} alt='sun' />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default nav
