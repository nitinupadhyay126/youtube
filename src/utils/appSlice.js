import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice(
{
    name:"app",
    initialState:{
        isMenuOpen:true,
        videoDetails:{
            title:"",
            channelTitle:"",
            likeCount:"",
            description:"",
         },
         videoType:"1",
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        videoItem:(state,action)=>{
            state.videoDetails=action.payload;
        },
        getVideoCatogry:(state,action)=>
        {
            state.videoType=action.payload;
        }
    },
},
);
export const {toggleMenu,videoItem,getVideoCatogry} =appSlice.actions;
export default appSlice.reducer;