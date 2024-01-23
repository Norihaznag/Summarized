import Nav from "@/components/Nav";
import Head from "next/head";
import React, { createContext, useState } from "react";
import '@/app/globals.css'
import Footer from "@/components/Footer";
import '@/app/globals.css'
import AdminNav from "@/components/AdminNav";
import Path from "./Path";

export const ThemeContext = createContext({});

interface PagesComponents{
    Component : any,
    pageProps : any

}
function MyApp({ Component, pageProps }:PagesComponents) {
  const [state,setState] :any = useState({
    Theme:false,
    Window:false,
    Admin:false,

  })
  return (
    <ThemeContext.Provider value={[state,setState]}>
      <React.Fragment>
      <Head>
        <meta name="" content="" />
      </Head>
      <main className={`flex flex-col 
      items-center ${state.Theme ? 'bg-[#202020] text-[#fff]' : 'bg-[#e8e8e8] text-black'}  `}>

       
       {state.Admin ? <AdminNav/>  : <Nav/> }
       <Path/>
      <Component {...pageProps}/>

      <Footer/> 
      
      </main>
      
     
    </React.Fragment>
    </ThemeContext.Provider>
    
  );
}

export default MyApp;