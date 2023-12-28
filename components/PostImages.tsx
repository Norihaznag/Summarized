import Thumbnail from "./Thumbnail"


const PostImages = ({className}:any) => {
  return (
    <div  className='flex flex-wrap flex-col md:grid grid-cols-3 gap-2
     h-fit
     '>
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>
    </div>
  )
}

export default PostImages