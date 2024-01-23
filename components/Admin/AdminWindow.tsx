import { ThemeContext } from "@/pages/_app"
import Link from "next/link"

const AdminWindow = () => {
  return (
    <div className="w-full min-h-[37vh] h-fit bg-[#1c1c1c] p-3 flex flex-row items-stretch  absolute ">

      <div className="Links flex-col flex w-full ">
      <Link href={'./Cpanel'} className="Link" >Dashboard</Link>
      <Link href={'/Posts'} className="Link" >Posts</Link>
      <Link href={'/Editor'} className="Link" >Editor</Link>
      <Link href={'/Settings'} className="Link" >Settings</Link>
      </div>
      

    </div>
  )
}

export default AdminWindow