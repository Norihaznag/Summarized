import TagAlphabetSection from '@/components/TagSection'
import TagsContent from '@/components/TagsContent'
import React from 'react'

const Tags = () => {
  return (
    <div className='Tags body w-full min-h-[50vh] h-fit mt-[4em] flex flex-col gap-3 p-3 items-center'>
        <h1 className='text-[1.5em] font-[CircularStd-Bold]'>Tags</h1>

        <div className="Body flex flex-col gap-3">

        <TagAlphabetSection/>
        <TagsContent character={'B'}/>

        </div>

    </div>
  )
}

export default Tags