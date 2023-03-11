import { createContext } from "react";

const appContext=createContext(
    {videoDetails:{
        title:"",
        channelTitle:"",
        likeCount:"",
     }
}
)
export default appContext;