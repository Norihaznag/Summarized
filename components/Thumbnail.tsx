import Image from 'next/image'
import Example from '@/public/images/Example.jpg'
const Thumbnail = () => {
  return (
    <Image src={Example} alt='The Image' className='w-full 
      grid-rows-1 bg-white
     rounded-xl shadow object-cover '/>
  )
}

export default Thumbnail