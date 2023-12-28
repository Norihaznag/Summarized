
const Aside = ({children}:any) => {
  return (
    <aside className='Aside w-full  min-h-[20vh] h-[fit] md:min-h-[60vh]
    md:col-start-6 md:col-span-2 
    md:row-start-1 gap-3 flex flex-col
    rounded-xl  row-start-2 shadow  order-3'>
        {children}
    </aside>
  )
}

export default Aside