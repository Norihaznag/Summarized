import Link from 'next/link'
import React from 'react'

const TagName = ({children}:any) => {
  return (
    <div className="TagName w-fit h-fit text-[1.1em] font-mono font-bold hover:text-fuchsia-600">
        <Link href={'TaggedWith'}>{children}</Link>
    </div>
  )
}

export default TagName