import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";


const MainContainer=()=>
{
    return(
    <div className="col-span-11"> 
        <ButtonList />
    <div className="col-span-11 scrollbar-thin h-screen scrollbar-thumb-gray-300 scrollbar-track-gray-100">
         
            <VideoContainer />
           
    </div>
    </div>
    )
}
export default MainContainer;