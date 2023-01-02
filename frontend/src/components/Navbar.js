import React from 'react'
import teameet_logo from '../assets/teameet_logo.svg'

export default function Navbar() {
  return (
    <nav className="py-4">
      <div class="container flex flex-wrap items-center mx-auto">
        <img src={teameet_logo} alt="logo"></img>
        <div className='px-8'>모임</div>
        <div className='px-8'>후기</div>
        <div className='px-8'>소식</div>
        <div className='px-8'>홍보관</div>
      </div>
    </nav>
  )
}
