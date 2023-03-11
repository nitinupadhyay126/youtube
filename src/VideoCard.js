

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import appContext from "./utils/appContext";
import { videoItem } from "./utils/appSlice";

const VideoCard=({info})=>
{
   
    const {snippet,statistics,id}=info;
    const{channelTitle,title,thumbnails,description}=snippet;
    const dispatch=useDispatch();
    
    const videoDetails={
        title:title,
        channelTitle:channelTitle,
        likeCount:statistics.likeCount,
        description:description
     }
     const onVideoItem=()=>
     {
     dispatch(videoItem(videoDetails))
     }
    
    return(
        <appContext.Provider value={{videoDetails:videoDetails}}>
        <div className="p-2 m-2 w-80">
           <Link to={"watch?v="+id}><img onClick={()=> onVideoItem()} alt="thusbnail" className="rounded-lg" src={thumbnails.high.url} /></Link>
           <ul>
            <li className="font-bold">{title}</li>
            <li className="text-gray-500">{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
           </ul>
        </div>
        </appContext.Provider>
    )
}
export default VideoCard;