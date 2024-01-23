import Autor from './Autor'
import Time from './Time'
import Title from './Title'
import Text from './Text'
import PostImages from './PostImages'
import HeadImage from './HeadImage'
import PostLink from './PostLink'
import Heading from './Heading'
import Content from './Content'
import { useContext } from 'react'
import { ThemeContext } from '@/pages/_app'

const Post = () => {
  const [Theme,setTheme]:any = useContext(ThemeContext) ;
  return (
    <div className={`Post  h-fit shadow rounded-lg pt-4  flex flex-col gap-2 md:col-span-5 md:col-start-1 row-start-1 ${Theme.Theme ? 'bg-[#000000]' : 'bg-white'}`}>
       <div className="Info w-full h-[fit] flex gap-2 justify-around  
       md:justify-between md:px-5 
       items-center ">
       <Autor/>
       <Time/>
       </div>

       <div className="Thumbnail w-full min-h-[5em] h-fit  p-4   md:grid grid-cols-2 grid-rows-1 gap-4">
        <HeadImage />
       <Title className="w-full h-full grid grid-cols-1 grid-rows-1
        place-content-center place-items-center
        col-start-1 row-start-1 text-center p-2" >
       How To implement a dark mode using Redux in a Next.js application.
       </Title>
       </div>
       <Content>
       <Text/>
        <PostImages/>
        <Heading>How To Do That in Express Node Js summer Gold</Heading>
        <Text />
        <PostLink/>
       </Content>

    </div>
  )
}

export default Post