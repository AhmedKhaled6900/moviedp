import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";
export const logoutuser = createAsyncThunk("logout/logout",async(url)=>{
    return axios.get("http://localhost:8000/formdata"
    )
    .then((res)=>{
        return res.data.results
    })
})
const   initialState ={ isauth : true}
 const logoutSlice=createSlice({
    name:"logout",
  
initialState,


    extraReducers:(builder)=>{
       builder.addCase( logoutuser.fulfilled, (state,action)=>{
       state.isauth=false
           console.log(state.isauth)
       })
    }
     })
     export default logoutSlice.reducer