import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getClustersFromServer = createAsyncThunk(
   "cluster/getClustersFromServer",
   async () => {
     return fetch("/api/clusters")
       .then((res) => res.json())
       .then((data) => data);
   }
 );
 
 export const createANewCluster = createAsyncThunk(
   "cluster/createANewCluster",
   async (clusterName) => {
     console.log("nnnn : ", clusterName);
     return fetch("/api/clusters", {
       method: "POST",
       body: JSON.stringify({title : clusterName}),
       headers: {
         Content_Type: "application/json"
       }
     })
       .then((res) => res.json())
       .then((data) => data);
   }
 );

 export const deleteCluster = createAsyncThunk(
   "cluster/deleteCluster",
   async (clusterID) => {
     console.log("nnnn : ", clusterID);
     return fetch(`api/clusters?id=${clusterID}`, {
       method: "DELETE",
     })
       .then((res) => res.json())
       .then((data) => data);
   }
 );


const slice = createSlice({
   name:'article',
   initialState:[],
   reducers:{

   },
   extraReducers: builder =>{
      builder.addCase(getClustersFromServer.fulfilled, (state, action) => {
         console.log("action data : ", action.payload.data);
         return action.payload.data;
         // state.concat(...action.payload.data);
       });
       builder.addCase(createANewCluster.fulfilled, (state, action) => {
         console.log("state : ", state);
         console.log("action : ", action);
       });
       builder.addCase(deleteCluster.fulfilled, (state, action) => {
         console.log("delete state : ", state);
         console.log("delete action : ", action);
       });
   }
   
   
})

export default slice.reducer