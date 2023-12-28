import Aside from '@/components/Aside'
import PostCard from '@/components/PostCard'
import SortBy from '@/components/SortBy'
import TopAds from '@/components/TopAds'

const Index = () => {
  return (
    <div className='body w-full min-h-[50vh] h-fit mt-[4em] flex flex-col gap-3 p-3 md:flex-row '>
      <Aside/>
      <div className="MainWithTopAd md:order-3">
      <TopAds/>
    <div className="Main">
        <div className="Header flex  mt-2 h-[4em] items-center justify-between ">

  <h1 className='text-[2em] font-[CircularStd-Bold]'>Posts</h1>

  <div className="Sort">
    <SortBy/>
  </div>

</div>
<div className="Posts w-full flex flex-col gap-3 min-h-[10vh] h-fit md:grid-cols-2 md:grid  ">
    <PostCard/>
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
      </div>
   

</div>
  )
}

export default Index