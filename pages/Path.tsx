'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Your functional component
const Path = () => {
  // Use the useRouter hook to get the current route information
  const router = useRouter(),
        currentPage = router.pathname,
        sliced = currentPage.replace('/','>'),
        splitted = sliced.split(','),
        Links = splitted.map((item,index)=> <Link href={item} key={index}/>) ;
  // Access the pathname property to get the current page

  return (
    <div onClick={()=>{
        alert(splitted)
    }} className='text-left w-full pl-10 text-sm text-gray-500'>
      <p>Summarized {sliced}</p>
    </div>
  );
};

export default Path;
