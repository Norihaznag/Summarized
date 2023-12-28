import React from 'react'

const Title = ({className,children}:any) => {
  return (
    <div className={className}>
        <h1 className='text-[1.6em] md:text-[25px] font-[CircularStd-Bold]

        '>{children}</h1>
    </div>
  )
}

export default Title