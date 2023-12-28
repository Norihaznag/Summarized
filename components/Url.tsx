import Link from "next/link"

const Url = ({children,href}:any) => {
  return (
    <Link href={href} className="w-[fit] h-[fit] bg-sky-500 hover:shadow-inner-xl  text-white p-3 rounded-lg m-1   hover:text-white">{children}</Link>
  )
}

export default Url