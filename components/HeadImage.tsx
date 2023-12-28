import Image from 'next/image'
import Example from '@/public/images/Example.jpg'
const HeadImage = () => {
  return (
    <Image src={Example} alt='The Image' className='md:min-w-[5em] min-h-[5em] 
    bg-slate-300 rounded-xl shadow object-cover col-start-2 row-start-1 '/>
  )
}

export default HeadImage