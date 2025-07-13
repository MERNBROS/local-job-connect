import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
      
        {/* <img src={assets.footer_logo} alt="Footer Logo" /> */}
        <p className='flex-1 border-gray-400 pl-4'>Created by MernBros © 2025 Job Portal | All rights reserved.</p>
        <div className='flex gap-x-4'>
            <img width={38} src={assets.github_mark} alt="GitHub Logo" />
        </div>
    </div>
  )
}

export default Footer
