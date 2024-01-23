import Rapports from '@/components/Rapports'
import PostsTable from '@/components/PostsTable'

const Dashboard = () => {
  return (
    <div className='w-full min-h-[100vh]  flex flex-col md:px-10 px-4 gap-2 '>
        <h1
        className='text-[1.5em] font-bold font-sans 
        '>Dashboard</h1>
        <div className="text-black">
        <Rapports/>
        <PostsTable/>
        </div>
        
    </div>
  )
}

export default Dashboard