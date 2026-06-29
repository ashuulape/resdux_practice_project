import React from 'react'


 const ResultCard = ({item}) => {
  

  return (
    <div className='min-w-90 max-w-150 h-fit border-2 border-white/10 rounded-xl p-1 flex flex-col gap-5 text-center flex-1 '>  

   {item.type=="photo"&& <img className='rounded-lg h-[90%]' src={item.thumbnail} alt={item.title} />}
   {item.type=="video"&& <video autoPlay loop muted className='rounded-lg h-[90%] object-cover object-center  bg-cover' src={item.url} alt={item.title} />}

    <h1 className=' font-["Roboto Condensed"] text-2xl font-bold text-amber-50 '>{item.title}</h1>
    <a className='bg-blue-500 rounded-md py-2 font-bold hover:bg-blue-600 hover:text-white transition-colors duration-300' href={item.url}>DOWNLOAD</a>


    </div>
  )
}

export default ResultCard

