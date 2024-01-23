import Example from '@/public/images/Example.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from '@/pages/_app'

const PostCard = ({style,media}:any) => {
  const [Theme] :any = useContext(ThemeContext) ;
  return (
    <Link href={'/Reading'}>
      <div className={` w-full min-h-fit grid grid-cols-3 grid-rows-2  items-center shadow p-2
      h-fit ${media}
      rounded-lg cursor-pointer  ${Theme.Theme ? 'bg-[#000000] text-white hover:bg-[#1b1b1b]' : 'bg-[#ffffff] text-black hover:bg-[#ececec]'}`}>

    <div className="col-span-2 row-span-3 flex flex-col justify-center p-1    ">
        <div className="Title w-full">
            <h1 className={`font-[CircularStd-Medium] ${style}`}>Lorem ipsum dolor sit amefffffffffft consectetur, adipisiciddkkfkf.</h1>
            
        </div>
        <p className='text-[13px] text-gray-500 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, beat..</p>
        <div className={`Date text-sm text-gray-500 ${style}`}>
            <p>2013/02/16</p>
        </div>
    </div>
   
        <Image src={Example} alt='image' className='row-span-3 col-start-3 flex w-full h-full shadow 
        object-cover rounded-lg'/>
    
</div>
    
    </Link>

  )
}

export default PostCard