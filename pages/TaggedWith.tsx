import PostCard from '@/components/PostCard'
import React from 'react'

const TaggedWith = () => {
  return (
    <div className="TaggedWith
    Tags body w-full min-h-[50vh] h-fit mt-[4em] flex flex-col gap-3 p-3 items-center
    ">
        <h1 className='text-[1.5em] font-[CircularStd-Bold]'>Tagged With B</h1>

        <div className="TaggedPosts md:w-[90%] grid grid-cols-1 gap-2 md:grid-cols-2">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        </div>
      

    </div>
  )
}

export default TaggedWith