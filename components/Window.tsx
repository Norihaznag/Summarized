import { useContext } from "react"
import WindowLink from "./WindowLink"
import { ThemeContext } from '@/pages/_app'
const Window = ({className}:any) => {

    const [Theme,setTheme] = useContext(ThemeContext) ;

  return (
   
        <div className={`WindowLInks  min-h-[2em] h-fit absolute  shadow rounded-xl top-[7vh] w-[fit] self-right left-[60vw] md:hidden  grid-cols-1 gap-3 grid-row-1  justify-between items-center ${Theme.Window ? 'grid' : 'hidden'} ${Theme.Theme ? 'bg-[#000] text-white ' : 'bg-[#fff] text-black'}  `}>

            

            <WindowLink href='/'>
                Home
            </WindowLink>

            <WindowLink href='Tags'>
                Tags
            </WindowLink>

            <WindowLink href='Account'>
            Account
            </WindowLink>


            <WindowLink href='FAQ'>
                FAQ
            </WindowLink>


        </div>

  )
}

export default Window