'use client';
import React from 'react'
import TimeIcon from '@/public/icons/time-svgrepo-com.svg'
import Image from 'next/image';
function formatDate(date:any) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${year}/${month}/${day}`;
  }
  
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  
const Time = () => {
  return (
    <div className='flex w-fit h-fit  justify-center items-center  gap-2 px-3'>
        <Image src={TimeIcon} alt='time' width={15} height={15}/>
        <p className='text-sm' >{formattedDate}</p>
    </div>
  )
}

export default Time