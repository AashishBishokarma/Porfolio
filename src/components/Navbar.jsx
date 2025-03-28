import React from 'react'
import logo from "../assets/raviKumarLogo.webp"
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label="Home">
          <img src={logo} className='mx-2' width={50} height={33}  alt='logo'/>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/AashishBishokarma"
          target='_blank'
          rel="noopener noreferrer"
          aria-label='GitHub'>
          <FaGithub/>
        </a>
        <a href="https://leetcode.com/u/bishokarmashish/"
          target='_blank'
          rel="noopener noreferrer"
          aria-label='LeetCode'>
          <SiLeetcode />
        </a>
        <a href="https://www.linkedin.com/in/aashish-bishokarma-0998ba24a/"
          target='_blank'
          rel="noopener noreferrer"
          aria-label='LinkedIn'>
          <FaLinkedin/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar