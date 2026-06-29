import React, { use, useEffect } from 'react'
import { FetchPhotos, FetchVideos } from '../api/mediaapi'
import { setActiveTabs, setError, setLoading, setQuery, setResults } from '../redux/fetures/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard.jsx'


const ResultGrid = () => {

    
    
   const {query,activeTab,results,loading,error}= useSelector((store)=>store.search)

   const dispatch=useDispatch()
  
   useEffect(() => {
     if (!query) return 
    try {
      dispatch(setLoading())


    const getdata=async()=>{
    let data
    if(activeTab=="photos"){
        data= await FetchPhotos(query)   
    }
    if(activeTab=="videos"){
        data=await FetchVideos(query)
    

    }
        dispatch(setResults(data))  
   }

   getdata()  

    } catch (error) {
        console.log(error);
        dispatch(setError(error));
        
    }

   }, [query,activeTab])
   
if(error) return <h1>Error</h1>
if(loading) return <h1 className='w-full h-full flex items-center justify-center text-2xl'>Loading.....</h1>



  return (
    <div className='flex flex-wrap gap-5 flex-1'>
        
    {results.map((item,index)=>{
       return  <ResultCard key={index} item={item}/>
    })}
    </div>
  )
}

export default ResultGrid