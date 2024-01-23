'use client';
import Autor from './Autor'
import AdminWindow from './Admin/AdminWindow'
import { useContext, useReducer } from 'react';
import Link from 'next/link';
import Theme from '@/components/Theme'
import { ThemeContext } from '@/pages/_app';
import Image from 'next/image';
import MenuIc from '@/public/icons/Opened.svg'
import Close from '@/public/icons/Close.svg'
import { useRouter } from 'next/router';
const Nav = () =>{

  const [theme]:any = useContext(ThemeContext) ;
  const router = useRouter();

  return(
  <nav className={`w-full min-h-[2em] h-fit flex  items-center pr-[5em] justify-between md:px-6 ${theme.Theme ? "bg-black" : ''}`}>
 
  <Autor Name='Nordine ' NameColor=''  RoleColor=''/>

  <div className="whole flex gap-3  justify-end items-center min-w-fit">

  <div className="Links md:flex gap-5 hidden">

  <Link href={'Cpanel'}>Dashboard</Link>
 
  <Link href={'Add'}>AddPost</Link>
 
  </div>
  <Theme/>
  </div>
  
  </nav>
  )

}


const AdminNav = () => { 

  const Menu = ()=>   <div onClick={() => dispatch({ type: 'ToggleWindow' })} className={`Menu md:hidden  p-2 absolute  right-0 ${state.iswindow ? '' : '' } z-[9999] `}>
    <Image src={state.iswindow ? Close : MenuIc} alt='img' width={33} height={20}/>
 {}
</div>

  const initialState = { iswindow: false };

  const reducer = (state :any, action :any) => {
  switch (action.type) {
    case 'ToggleWindow':
      return { iswindow: ! state.iswindow };
    default:
      return state;
  }
};

  const [state, dispatch] = useReducer(reducer, initialState);

   

  return (

    <div className="Nav w-full h-fit bg-[#ffffff] z-[9999]">
      
      <Menu/>
      {state.iswindow ? <AdminWindow/> :<Nav/>  }

    </div>
   
  )
}

export default AdminNav