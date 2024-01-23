import React from 'react'

const Content = ({children}:any) => {
  return (
    <div className="Content p-3 break-all flex flex-col gap-3">
     {children}
       </div>

  )
}

export default Content