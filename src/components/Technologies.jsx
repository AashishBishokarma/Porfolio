import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'

const Technologies = () => {
  return (
    <div className='pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div>
          <RiReactjsLine className='text-7xl text-blue-400' />
        </div>
        <div className='p-4'>
          <SiMongodb className='text-7xl text-green-600'/>
        </div>
        <div className='p-4'>
          <FaNodeJs className='text-7xl text-green-600'/>
        </div>
        <div className='p-4'>
          <SiExpress className='text-7xl'/>
        </div>
        <div className='p-4'>
          <RiTailwindCssFill className='text-7xl text-blue-400'/>
        </div>
        <div className='p-4'>
          <BiLogoPostgresql className='text-7xl text-sky-700'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies