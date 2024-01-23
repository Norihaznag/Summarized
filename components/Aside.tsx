
const Aside = ({children,Title}:any) => {
  return (
    <aside className='Aside w-full  min-h-[20vh]  md:max-h-[80em] 
    md:col-start-6 md:col-span-2 
    md:row-start-1 gap-3 flex flex-col
    rounded-xl  row-start-2   order-3'>
      {Title ? <h1 className='text-[1.2em] 
        font-[CircularStd-Bold] p-2
        '>{Title}</h1> : ''}
      
        <div className="Elements overflow-y-scroll  gap-3 flex flex-col">
        {children}
        </div>
    </aside>
  )
}

export default Aside