import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";
export const loginuser = createAsyncThunk("login/login",async(url)=>{
    return axios.get("http://localhost:8000/formdata"
    )
    .then((res)=>{
        return res.data.results
    })
})
export const logoutuser = createAsyncThunk("logout/logout",async(url)=>{
    return axios.get("http://localhost:8000/formdata"
    )
    .then((res)=>{
        return res.data.results
    })
})


const   initialState ={ isauth : false}
 const loginSlice=createSlice({
    name:"login",
  
initialState,


    extraReducers:(builder)=>{
       builder.addCase( loginuser.fulfilled, (state,action)=>{
       state.isauth=true
           console.log(state.isauth)
       })
       builder.addCase( logoutuser.fulfilled, (state,action)=>{
       state.isauth=false
           console.log(state.isauth)
       })
    }
     })
     export default loginSlice.reducer

// const authenticationSlice = createSlice({
//     name: "authentication",
//     initialState: {
//       isAuthenticated: false,
//     },
//     reducers: {
//       loginSuccess: (state, action) => {
//         state.isAuthenticated = true;
//       },
//       logout: (state) => {
//         state.isAuthenticated = false;
//       },
//     },
//   });
  
//   export const { loginSuccess, logout } = authenticationSlice.actions;
//   export default authenticationSlice.reducer;