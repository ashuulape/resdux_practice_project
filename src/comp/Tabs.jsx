import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/fetures/searchSlice'

const Tabs = () => {

    const Tabs=['photos','videos']

    const dispatch=useDispatch()

    const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-2 justify-center p-2'>
        {
            Tabs.map((elem,idx)=>{
                return <button className={`${
                    activeTab === elem?"bg-amber-500 font-semibold":"bg-gray-500/10 font-normal"
                } transition- colors duration-300 text-white px-5 py-2 rounded-md uppercase`}
                onClick={()=>{
                    dispatch(setActiveTabs(elem))
                }}
                key={idx}>
                    {elem}
                </button>
            })
        }
    </div>
  )
}

export default Tabs