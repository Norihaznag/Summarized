import React from 'react'
import TagAlpha from './TagAlpha';

const TagAlphabetSection = () => {
    const Alphabets = 'ABCDEFGHIJQLMNOPQRSTUVWXYZ',
          AlphabetArr = Alphabets.split('');

  return (
    <div className="TagAlphabetSection min-w-full w-fit min-h-[7vh] h-fit  flex gap-2 flex-wrap  justify-evenly items-stretch  text-[1.4em] rounded">
        {AlphabetArr.map((el,index)=>
        <TagAlpha key={index} href={`Tags/${el}`}>{el}</TagAlpha>
        )}
    
    </div>
  )
}

export default TagAlphabetSection