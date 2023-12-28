import { ThemeContext } from "@/pages/_app";
import Link from "next/link"
import { useContext } from "react"
const Footer = () => {
    const [Theme,setTheme] = useContext(ThemeContext) ;

  return (
    <div className={`Footer w-full h-[full] shadow rounded flex flex-col items-center justify-around   md:grid md:grid-cols-3 md:grid-rows-2 md:gap ${Theme.Theme ? 'bg-[#000000]' : 'bg-white'}`}>
        <div id="Bolder" className="Logo  text-[1.6em] text-center p-2 row-span-2   ">
            <h1>Summarized</h1>
        </div>
        <div className="Links w-fit row-span-2 h-fit flex flex-col md:flex-row gap-5 p-3 text-[1em] text-center">

            <Link href={'/'}>Contact</Link>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Terms And Conditions</Link>
            <Link href={'/'}>Developer</Link>

        </div>
        <div className="JoinUsEmail p-3 w-full row-span-2  text-center
     ">
            <h2>Join Our New Lister</h2>
            <form action="/" method="post" className="p-3">
                <input type="email" className="rounded-lg text-center p-3 w-[300px] bg-slate-50" name="" id="" placeholder="Write Your Email Here"/>
                <button type="submit" className="p-1 px-4 mt-1
                 bg-[#D9D9D9] w-fit rounded-md
                ">Submit</button>
            </form>
        </div>
        <div className="md:col-span-4 col-span-3 row-start-3 bg-black text-white w-full h-full text-center p-4">All Rights Reserved 2023</div>
    </div>
  )
}

export default Footer