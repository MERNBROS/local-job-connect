import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div>
        <div className="container px-4 2xl:px-20 mx-auto my-20">
            <div className='relative bg-gradient-to-r from-slate-700 to-slate-950 text-white py-16 text-center mx-2 sm:p-24 rounded-xl p-12 rounded-lg shadow-lg'>
                <h1 className='text-2xl sm:text-4xl md:text-3xl lg:text-4xl font-medium mb-4'>Download Mobile App For Better Experience</h1>
                <h2 className='text-lg sm:text-xl md:text-lg lg:text-xl font-medium mb-4 text-slate-300'>Coming Soon!</h2>
                <div className='flex items-center justify-center gap-4 mt-8'>
                    <a href="#" className='inline-block'>
                        <img className='h-12' src={assets.app_store} alt="App Store" />
                    </a>
                    <a href="#" className='inline-block'>
                        <img className='h-12' src={assets.play_store} alt="Play Store" />
                    </a>
                </div>
            </div>
        </div>
        {/* ivde ardelum image vech ads replace cheyanm ta below */}
        {/* <img src={assets.app_main_img} alt="Advertisement" /> */}

    </div>
  )
}

export default AppDownload
