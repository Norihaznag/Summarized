import { ThemeContext } from '@/pages/_app'
import React, { useContext } from 'react'

const SortBy = () => {
    const [state] = useContext(ThemeContext);
  return (
    <div className={`SortBy flex gap-2  py-3 items-center justify-center ` }>
        <h1>Sort By :</h1>
        <select className={`Choices rounded-lg p-2 flex ${state.Theme ? 'bg-black' : 'bg-slate-100 text-black'}  `}>
            <option>Trending</option>
            <option>Newest</option>
            <option>Oldest</option>
        </select>
    </div>
  )
}

export default SortBy