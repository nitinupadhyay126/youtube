import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_API,AUTH_KEY } from "./utils/constaints";
import Shimmer from "./utils/Shimmer";
import VideoCard from "./VideoCard";

const VideoContainer=()=>
{
    
    const [videos,setVideos]=useState([]);
    const videoType=useSelector(store=>store.app.videoType)
  
    useEffect(()=>{
        getAllVideos();
    })

    const getAllVideos=async ()=>{
        const data=await fetch(YOUTUBE_API+videoType+AUTH_KEY);
        const json=await data.json();
        setVideos(json?.items)
        console.log(json?.items);
       
    };
    if(videos.length ===0) return <Shimmer />;
    return(
        <div className="grid grid-cols-4"> 
            {videos.map(e=> <VideoCard info={e} key={e.id}/>)}

        </div>
    );
}
export default VideoContainer;