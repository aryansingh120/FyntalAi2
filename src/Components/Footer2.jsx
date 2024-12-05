import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa'

const Footer2 = () => {
  return (
    <div className='py-[2rem] flex justify-between px-[3vw] items-center bg-[#c7c4c4]'>
    <div className='flex w-[50%]'>
    <img src="/fyntl3.png" alt="Fyntl AI" className='h-[4rem]'/>
    </div>
    <div className='flex w-[20%] justify-around'>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} color="#4267B2" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="#E4405F" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} color="#1DA1F2" />
      </a>
    </div>
      
    </div>
  )
}

export default Footer2
