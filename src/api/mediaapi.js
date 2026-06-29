import axios from "axios"

const UnsplashKey=import.meta.env.VITE_UNSPLASH_KEY
const PaxelsKey=import.meta.env.VITE_PIXEL_KEY




export const FetchPhotos=async (query,page=1,per_page=20) => {
 
    const res= await axios.get(`https://api.unsplash.com/search/photos`,{
        params:{
            query,
            page,
            per_page
        },
        headers:{ Authorization:`Client-ID ${UnsplashKey} ` }
    })
 const finaldata= res.data.results.map((elem)=>{
    return {title:elem.alt_description,
        type:'photo',
        thumbnail:elem.urls.small,
        url:elem.links.download
    }
 })

    return JSON.parse(JSON.stringify(finaldata))
 
}

export const FetchVideos=async (query,per_page=20) => {

    const res= await axios.get(`https://api.pexels.com/videos/search`,{
        params:{
            query,
            per_page
        },
        headers:{ Authorization:`${PaxelsKey}` }
    })

    
    const finaldata= res.data.videos.map((elem)=>{
        return {
            id:elem.id,
            title:elem.user.name,
            type:'video',
            thumbnail:elem.image,
            url:elem.video_files[0].link
        }
    })

    return JSON.parse(JSON.stringify(finaldata))
    
}





