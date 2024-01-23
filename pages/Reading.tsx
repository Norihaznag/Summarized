import Aside from '@/components/Aside'
import AsidePostCard from '@/components/AsidePostCard'
import Post from '@/components/Post'
import React from 'react'
import Example from '@/public/images/Example.jpg'
import photo from '@/public/images/600-600.jpg'
const Reading = () => {
  return (
    <div className="Reading w-full min-h-[40vh] h-fit mt-[4em] flex flex-col p-3 justify-center md:flex-row gap-4 ">
      <Post/>
      <Aside Title='Related Posts'>
        

        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>

        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>

        <AsidePostCard src={photo} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>

        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>

        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>
        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>
        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>

        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>

        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>

        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>
        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>
        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>
        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>
        <AsidePostCard src={Example} Title="The Ultimate Version of nordine.js is comming soon !">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a ipsa error?
        </AsidePostCard>

      </Aside>
    </div>
  )
}

export default Reading