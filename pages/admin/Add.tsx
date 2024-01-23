import { ThemeContext } from '../_app'
import { useContext, useEffect, useState } from 'react'
import Editor from '@/components/Editor'
import TagsField from '@/components/TagsField'
import Image from 'next/image'
import Save from '@/public/icons/Save.svg'
import Publish from '@/public/icons/Publish.svg'
import Cancel from '@/public/icons/Cancel.svg'
import { useReducer } from 'react'

const Button = ({children ,icon,style,onClick} :any) => <button type="submit" className={`bg-white p-2 w-fit gap-2 flex items-center justify-center shadow rounded-md ${style}`} onClick={onClick}>
  {icon ? <Image src={icon} alt='img' width={30} /> : '' }
  {children}
</button> 

const Add = () => {

  const [state]:any = useContext(ThemeContext);

  const inistate = {
    light : 'bg-white text-black',
    dark : 'bg-black text-white',
    mode : ''
  };

  const reducer = (local:any , action:any ) => {
    switch (action.type) {
      case 'DARK':
        return {...local,
          mode : local.dark };
      case 'LIGHT':
        return {...local,
          mode : local.light };
      default:
        return local;
    }
  };
  const [local,disptach] = useReducer(reducer,inistate) ;
 
 useEffect(()=>{
  state.Theme ? disptach({type: 'DARK'}) : disptach({type: 'LIGHT'})
 },[state.Theme])


  return (
    <div className='w-full min-h-[100vh]  flex flex-col p-4  md:p-12 gap-2 mt-6'>
      <div className="">
        <h1 >Write Your Post</h1>
      </div>
        <input type="text" name="" id="" placeholder='Write The Title Here' className={`p-4 ${local.mode}`}/>

        <textarea name="" id="" cols={10}  rows={6} placeholder='Write The Details About the post' className={`p-4 ${local.mode}`}></textarea>

        <TagsField/>
        <Editor/>

        <div className="flex gap-4 w-full text-black mt-8">
        <Button icon={Publish}>
          Publish
        </Button>
        <Button  icon={Save}>
          Save to Drafts
        </Button>
        <Button   icon={Cancel} >
          Cancel
        </Button>
        </div>
       

    </div>
  )
}

export default Add