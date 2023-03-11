import { useDispatch } from "react-redux";



import {toggleMenu} from "./utils/appSlice"
const Header=()=>
{
    const dispatch=useDispatch();
    const onShowMenuHandler=()=>
    {
        dispatch(toggleMenu());
    }
    return(
    <div className=" shadow-lg  grid grid-flow-col">
    <div className="flex col-span-1">    
    <img  className="h-8 m-3 " onClick={()=>onShowMenuHandler()} alt="menu" src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line.png" />
    <img alt='logo' className="h-12  m-1 " src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" />
    </div>
    <div className="col-span-10 m-2 text-center">
    <input className=" w-96  h-9  rounded-l-full border-b-2" type="text" placeholder="   Search "/>
    <button className="bg-gray-200 h-9  w-10 rounded-r-full">🔍</button>
    </div>
    <div className="col-span-1">
    <img  className="h-8 m-3 right-11" alt='user' src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg" />
    </div>
    </div>
    )
};
export default Header;