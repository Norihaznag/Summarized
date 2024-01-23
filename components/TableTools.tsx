import Image from "next/image"
import Delete from '@/public/icons/delete.svg'
import add from '@/public/icons/add.svg'
import search from '@/public/icons/search.svg'
const TableTools = () => {
    
  return (
    <div className='TableTools w-full h-fit min-h-[3em]  grid md:grid-cols-2 gap-2
    
    md:grid-rows-1 grid-cols-1 grid-rows-2 '>
<div className="SearchBar flex md:order-1 ">

    <div className="Place w-full h-full relative flex">
    <input type="text" name="" id="" className="w-full h-full md:rounded-lg md:order-1 z-0 text-lg indent-3" />
            <Image src={search} width={26} className="absolute m-2 right-0 z-10 hover:bg-slate-200 rounded-full
            cursor-pointer
            " alt="img"/>
    </div>
          
        </div>
        <div className="Tools  w-full h-full flex justify-between max-h-[4em] ">
            <button className=' flex gap-2 items-center p-2 bg-white rounded'>
            <Image src={add} width={26} alt="img"/>
                Add Post</button>
            <button className=' bg-white flex gap-2 items-center p-2 rounded'>
                <Image src={Delete} alt="img"/>
                Delete
            </button>
        </div>
        
    </div>
  )
}

export default TableTools