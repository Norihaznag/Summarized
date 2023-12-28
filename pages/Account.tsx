import LoginForm from '@/components/LoginForm'
import SectionImage from '@/components/SectionImage'
import React from 'react'
import LoginImg from '@/public/images/Login.png'
const Account = () => {
  return (
    <div className='Account body w-full min-h-[80vh] h-fit mt-[4em] flex flex-col md:flex-row gap-3 p-3 items-center md:justify-center'>

       <SectionImage src={LoginImg} className="w-[25em] md:order-2"/>

      <LoginForm/>
    
    </div>
  )
}

export default Account