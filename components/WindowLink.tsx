import Link from 'next/link'
import { ThemeContext } from '@/pages/_app'
import { useContext } from 'react';
const WindowLink = ({children,href}:any) => {
    const [Theme,setTheme] = useContext(ThemeContext) ;
  return (
    <Link href={`${href}`} className={` rounded-xl min-w-[8em] p-2 ${Theme ? 'hover:bg-black' : 'bg-white'} `}>{children}</Link>
  )
}

export default WindowLink