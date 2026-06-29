import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/fetures/searchSlice'

const Searchbar = () => {

    const [search, setsearch] = useState('')

    const dispatch=useDispatch()

    const submitHandle=(e)=>{
        e.preventDefault()
       dispatch(setQuery(search))
       
    }

  return (
    <div className='flex flex-col items-center w-full justify-center gap-2 m-2'>
      
        <form onSubmit={(e)=>{submitHandle(e)}} action="" className='flex gap-1 items-center'>
        <input required className='p-2 border-2 border-amber-50 rounded-md w-[400px] text-white' type="text" placeholder="Search anything" value={search} onChange={(e)=>setsearch(e.target.value)} />
        <button className='bg-blue-500 p-2 rounded-md ml-2 text-white' type="submit">Search</button>
        </form>
    </div>
    
  )
}

export default Searchbar