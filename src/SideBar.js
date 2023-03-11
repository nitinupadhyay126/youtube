import { useDispatch, useSelector } from "react-redux";
import {MdHome,MdOutlineSubscriptions } from 'react-icons/md';
import { Link } from "react-router-dom";
import { videoCategory } from "./utils/constaints";
import { getVideoCatogry } from "./utils/appSlice";
const SideBar=()=>
{
    const dispatch=useDispatch()
    const onMusicClick=()=>
        {
                dispatch(getVideoCatogry(videoCategory.Music))
        };
    const onFilmAnimatinClick=()=>
    {
        dispatch(getVideoCatogry(videoCategory.Film_Animation))

    };
    const onVehicleClick=()=>
    {
        dispatch(getVideoCatogry(videoCategory.Autos_Vehicles))
    };
    

    const isMenuOpen=useSelector(store => store.app.isMenuOpen);
    if (!isMenuOpen) return null;
    return(
        <div className="shadow-lg w-56 m-2  scrollbar-thin h-screen scrollbar-thumb-gray-300 scrollbar-track-gray-100 col-span-1"> 
              <div className="m-2 p-2 space-y-5">
                <ul className="space-y-2">
                   <Link to="/"> <li className="flex h-8 w-20"><MdHome /> Home</li></Link>
                    <li onClick={()=>onMusicClick()}>Music  🎵  </li>
                    <li>Shorts  🎵  </li>
                    <li className="flex"><MdOutlineSubscriptions />Suscription  </li>
                </ul>
                
                <ul className="space-y-2"> 
                    <li onClick={()=>onFilmAnimatinClick()}>Film Animation</li>
                    <li onClick={()=>onVehicleClick()}>Autos Vehicles</li>
                    <li>Your Video</li>
                    <li>Watch Latter</li>
                    <li>Your Clips</li>
                </ul>
                <div>
                    <h1 className="font-bold">Subscriptions</h1>
                    <ul className="space-y-2 p-2">
                        <li>Tarak Mehta</li>
                        <li>Sony Sub</li>
                        <li>Aditya Movie</li>
                        <li>Neon Man</li>
                    </ul>
                </div>
               <div>
                <h1 className="font-bold">Explore</h1>
                <ul className="space-y-2 p-2">
                    
                    <li>Tranding 🖖 </li>
                    <li>Music 🎼 </li>
                    <li>Movies 🎥 </li>
                    <li>Live </li>
                    <li>Gaming 🎮 </li>
                    <li>News 📰 </li>
                    <li>Sports 🏅 </li>
                    <li>Learning 📖 </li>
                    <li>Fasion & Beauty </li>
                </ul>
                </div>
             </div>  
        </div>
    );
}
export default SideBar;