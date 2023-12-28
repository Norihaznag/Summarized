import React from 'react'

const TagAmount = ({amount}:any) => {
  return (
    <div className="TagAmount text-sm  ">
        <h2>{`${amount} Post`}</h2>
    </div>
  )
}

export default TagAmount