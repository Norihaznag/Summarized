'use client';
import Image from "next/image";
import Edite from '@/public/icons/Edite.svg'
import Delete from '@/public/icons/delete.svg'

const Actions = () => {
  return (
    <div className="Actions flex gap-4  w-full h-full justify-center">
        <Image className="cursor-pointer" src={Edite} alt="Edite" width={20} onClick={()=> {
            alert("Edite btn is working")
        }}/>
        <Image className="cursor-pointer" src={Delete} alt="Edite" width={20} onClick={()=> {
            alert("Delete btn is working")
        }}/>

    </div>
  )
}

export default Actions