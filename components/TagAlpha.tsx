import Link from "next/link"

const TagAlpha = ({children,href}:any) => {
  return (
    <div className="TagAlpha w-max h-full p-5 text-white hover:bg-fuchsia-400 bg-[#511B62] rounded-lg">
        <Link href={href}>{children}</Link>
    </div>
  )
}

export default TagAlpha