import React, { ReactNode } from 'react'

const Heading = ({children}:any) => {
  return (
    <h1 className='text-[1.3em] font-[CircularStd-Bold] '>{children}</h1>
  )
}

export default Heading