import { useSearchParams } from "react-router-dom"

import { useSelector } from "react-redux";
const VideoPlayCard=()=>
{
    const [searchParams]=useSearchParams();
    const id=searchParams.get("v");
    //const data=useContext(appContext);
    const {channelTitle,likeCount,title}=useSelector(store=>store.app.videoDetails);
    
    return(
        <div className="m-5 p-5">
             <iframe className="" width="917" height="516" src={"https://www.youtube.com/embed/"+id} title="THE LOVE MASHUP 2023 🧡💕💚Best Mashup of Arijit Singh, Jubin Nautiyal, Atif Aslam#romentic | lofi4you." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
             <ul className="m-2 p-2">
                <li className="font-bold ">{title}</li>
                <div className="flex p-2 m-2 ">
                <li><img className="h-8" alt="user" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" /></li>
                <li className="font-bold ">{channelTitle}</li></div>
                <li className="">{likeCount}</li>
            </ul> 
        </div>
    );
}
export default VideoPlayCard;