import Link from 'next/link'
import { ThemeContext } from '@/pages/_app'
import { useContext } from 'react';
const WindowLink = ({children,href}:any) => {
    const [state] = useContext(ThemeContext) ;
  return (
    <Link href={`${href}`} className={` rounded-xl min-w-[8em] p-2 ${state.Theme ? 'hover:bg-[#444]' : 'hover:bg-[#d6d6d6]'} `}>{children}</Link>
  )
}

export default WindowLink