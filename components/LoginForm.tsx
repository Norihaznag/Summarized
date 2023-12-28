'use client'
import { ThemeContext } from "@/pages/_app"
import Link from "next/link"
import { useContext } from "react"

const LoginForm = () => {
  const [state] = useContext(ThemeContext);
  return (
    <div className={`LoginForm md:max-w-[25em] w-full h-fit  flex flex-col rounded-lg md:order-1   shadow   items-center justify-center p-3 ${state.Theme ? 'bg-black  text-white' : 'bg-slate-100 text-black'}`}>
        <h1 className='text-[1.6em] p-3
        '>Login</h1>

        <form action="/" className='w-full h-full  flex flex-col p-4 gap-4' method="post">

            <div className="Email flex-col flex">
            <label htmlFor="Email" className="">Email</label>
            <input type="email" name="Email" id="" className='p-3 rounded-lg' />
            </div>

            <div className="Password flex-col flex">
            <label htmlFor="Password" className="">Password</label>
            <input type="password" name="Email" id="" className='p-3 rounded-lg' />
            </div>

            <button className={`bg-[#000] min-w-[3em] w-fit p-2 rounded-lg  ${state.Theme ? 'bg-purple-800  hover:shadow-purple-600 shadow-lg text-white' : 'bg-blue-100 text-black'}`}>Submit</button>
        </form>

        <div className="Signup flex">
        <p className="text-sm">You Don't Have an account ?</p>
        <Link href={'Sign up'} className="text-blue-500 underline">Sign Up</Link>

        </div>
       
    </div>
  )
}

export default LoginForm