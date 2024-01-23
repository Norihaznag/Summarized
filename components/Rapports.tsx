import React from 'react'
import RapportCard from './RapportCard'
import Published from '@/public/icons/Published.svg'


import Pending from '@/public/icons/Pending.svg'
import Deleted from '@/public/icons/Deleted.svg' 
import Visits from '@/public/icons/Visits.svg'
const Rapports = () => {
  return (
    <div className='Rapports min-h-[10em] h-fit w-full flex flex-col md:flex-row 
    items-center gap-3 flex-wrap justify-between
    p-1'>
<RapportCard Name='Published'src={Published}/>
<RapportCard Name='Pending' src={Pending}/>
<RapportCard Name='Deleted' src={Deleted}/>
<RapportCard Name='Visits' src={Visits}/>


    </div>
  )
}

export default Rapports