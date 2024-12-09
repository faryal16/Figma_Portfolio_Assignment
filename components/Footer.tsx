import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=' bg-[#d8e7ec] flex  '>

    <div className='w-[570px] h-[220px] container px-8 lg:px-32 py-4 '>
        <h2 className='md:text-2xl font-semibold text-xl text-[#457B9D] mb-4 mt-8' >Contacts</h2>
        <h1 className='md:text-5xl text-3xl font-bold mb-4 ' >Get in touch</h1>
        <Link href="bintefarzana1992@gmail.com" className='font-semibold ' >bintefarzana1992@gmail.com</Link>
        <div className="flex gap-8 text-2xl  text-[#457B9D]  cursor-pointer mt-2 "><a href="https://github.com/faryal16" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/bint_e_farzana/" target="_blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/faryal-junaid-06780b2b4/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        
    <div className="mt-14 font-semibold">
    Copyright &copy; {new Date().getFullYear()}. Develop & Designed by CodeWithFairy
    </div>
    </div>
    </footer>
  )
}

export default Footer