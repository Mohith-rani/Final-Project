import React from 'react'
import first_img from './first_img.jpg'
import video from './video.mp4'

export default function Rootlayout() {
  
  return (
    <div className='root-layout'>
        <div className='first-box'> 
  <video autoPlay loop controls muted>
    <source src={video}></source>
  </video>
</div>

        <div className='second-box'>
        <img src={first_img} className='first_img' alt="this is an img" />
        </div>

    </div>
  )
}
