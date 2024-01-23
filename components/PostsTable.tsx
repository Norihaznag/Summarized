' use client' ;
import React, { useState } from 'react'
import Actions from '@/components/Actions';
import TableTools from '@/components/TableTools';

const PostsTable = () => {

    const Row = ({head}:any) =>
        <tr className='bg-gradient-to-b from-white to-neutral-100 rounded-lg h-[3em]'>
        <th>Select</th>
        <th>ID</th>
        <th>Article</th>
        <th>Date</th>
        <th>Status</th>
        <th>Actions</th>
    </tr>
    
    const RowDetail = ({ID = 1,Article= 'How To Fuck a pawg in doggy',Date = '2010/02/08',Status = 'Published'})=>     <tr className='bg-white text-sm h-[3em]'>
    <td>
       <input type="checkbox" name="" id="" />
    </td>
    <td>{ID}</td>
    <td className='overflow-hidden'>{Article}</td>
    <td>{Date}</td>
    <td>
        {Status}
    </td>
    <td className='
    '><Actions/></td>
</tr>

    let data = [
        {
            select : false,
            ID : 3,
            Article : 'Horror Movie ' ,
            Date : '2022/01/18',
            Status : 'Pending',
        },
        {
            select : false,
            ID : 2,
            Article : 'A moroccan Revolution' ,
            Date : '2023/01/18',
            Status : 'Published',
        },
        {
            select : false,
            ID : 2,
            Article : 'The Great Gatsby  ' ,
            Date : '2024/01/18',
            Status : 'Pending',
        },
        {
            select : false,
            ID : 2,
            Article : 'Athiesme is Greater' ,
            Date : '2021/08/10',
            Status : 'Published',
        }
    ]
  return (
    <div className='PostsTable p-2 flex flex-col gap-2 '>
                <TableTools/>
        <table className='w-full  text-left indent-4 overflow-x-scroll'>
            <thead>
            <Row/>
            </thead>

         <tbody className=''>
         {data.map((el,index)=>
          <RowDetail key={index} ID={el.ID} Article={el.Article} Date={el.Date} Status={el.Status} />
         )}

         </tbody>
        
        </table>
    </div>
  )
}

export default PostsTable