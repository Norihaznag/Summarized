import Aside from '@/components/Aside'
import AsidePostCard from '@/components/AsidePostCard'
import Post from '@/components/Post'
import PostCard from '@/components/PostCard'
import React from 'react'

const Reading = () => {
  return (
    <div className="Reading w-full min-h-[40vh] h-fit mt-[4em] flex flex-col p-3 justify-center md:flex-row gap-4 ">
      <Post/>
      <Aside>
        <h1 className='text-[1.2em] 
        font-[CircularStd-Bold] p-2
        '>Related Posts</h1>
        <AsidePostCard/>
      </Aside>
    </div>
  )
}

export default Reading