import React from 'react'


 const ResultCard = ({item}) => {

    const savetocollection=(item)=>{
        const olddata=JSON.parse( localStorage.getItem("collection")) || []

        const newdata=[...olddata,item]
        localStorage.setItem("collection",JSON.stringify(newdata))

        alert("saved to collection")
    }
  

  return (
    <div className='h-fit  min-w-[400px] max-w-[45vw] border-2 border-white/10 rounded-xl p-1 flex flex-col  text-center gap-4 flex-2 '>  
<div className='relative flex flex-col  h-fit'>
     {item.type=="photo"&& <img className='rounded-lg h-[70vh] object-cover ' src={item.thumbnail} alt={item.title} />}
     {item.type=="video"&& <video autoPlay loop muted className='rounded-lg h-[70vh] object-cover bg-cover' src={item.url} alt={item.title} />}
   <div id='tik' className='absolute bottom-0 left-0 w-full h-fit flex items-end justify-start '>
     <h1 className=' font-["Roboto Condensed"] text-2xl font-bold text-amber-50 '>{item.title}</h1>
   </div>
</div>
  <div className='flex items-center flex-row justify-around'>
    <a className='bg-blue-500 h-auto w-[75%] rounded-md py-2 font-bold hover:bg-blue-600 hover:text-white transition-colors duration-300' href={item.url}>DOWNLOAD</a>
    <button className='w-[20%] bg-green-500 h-auto rounded-md py-2 font-bold hover:bg-green-600 hover:text-white transition-colors duration-300'
    onClick={()=>savetocollection(item)}
    >save</button>


  </div>


    </div>
  )
}

export default ResultCard

