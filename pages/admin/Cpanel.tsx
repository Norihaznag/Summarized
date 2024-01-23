'use client' ;
import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '@/pages/_app'
import Dashboard from './Dashboard';

const Cpanel = () => {
    console.log('app rendred');
    const [state,setState] : any = useContext(ThemeContext) ;

    useEffect(() => {

      setState((prev:any)=>{
        console.log("state changed")
        return {...prev,Admin: true} ;
      })
    }, [state.Admin]);
    
    
     
    

  return (
    <div className="Cpanel w-full min-h-[100vh] h-fit
    overflow-x-scroll
    ">
        <Dashboard/>
    </div>
  )
}

export default Cpanel