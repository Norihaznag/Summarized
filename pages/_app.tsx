import Nav from "@/components/Nav";
import Head from "next/head";
import React, { createContext, useState } from "react";
import '@/app/globals.css'
import Footer from "@/components/Footer";
import '@/app/globals.css'

export const ThemeContext = createContext()

interface PagesComponents{
    Component : any,
    pageProps : any

}
function MyApp({ Component, pageProps }:PagesComponents) {
  const [state,setState] = useState({
    Theme:false,
    Window:false
  })
  return (
    <ThemeContext.Provider value={[state,setState]}>
      <React.Fragment>
      <Head>
        <meta name="" content="" />
      </Head>
      <main className={`flex flex-col items-center ${state.Theme ? 'bg-[#202020] text-[#fff]' : 'bg-[#e8e8e8] text-black'}  `}>
      <Nav/>
      <Component {...pageProps}/>
      <Footer/>
      </main>
      
     
    </React.Fragment>
    </ThemeContext.Provider>
    
  );
}

export default MyApp;