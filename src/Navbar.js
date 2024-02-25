import React from 'react'
import title_head from './images/title_head.jpg';

export default function Navbar() {
  return (
    <div>
        <img src={title_head} width="100%" height="100px"></img>
        <marquee bgcolor="blue" className="nrmltext" scrollamount="10">This is an info</marquee>
        <marquee bgcolor="red" scrollamount="5">This is imp text</marquee>
    </div>
  )
}
