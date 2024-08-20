import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk(
   "article/getArticlesFromServer",
   async (url: string) => {
     return fetch(url)
       .then((res) => res.json())
       .then((data) => data);
   }
 );
 
 export const createANewArticle = createAsyncThunk(
   "article/createANewArticle",
   async (articleBody) => {
     console.log("nnnn : ", articleBody);
     return fetch("/api/articles", {
       method: "POST",
       body: JSON.stringify(articleBody),
       headers: {
         Content_Type: "application/json"
       }
     })
       .then((res) => res.json())
       .then((data) => data);
   }
 );
 
 export const updateArticle = createAsyncThunk(
   "article/updateArticle",
   async (articleBody) => {
     console.log("nnnn : ", articleBody);
     return fetch("api/articles", {
       method: "PUT",
       body: JSON.stringify(articleBody),
       headers: {
         Content_Type: "application/json"
       }
     })
       .then((res) => res.json())
       .then((data) => data);
   }
 );
 export const deleteArticle = createAsyncThunk(
   "article/deleteArticle",
   async (articleID:string) => {
     console.log("nnnn : ", articleID);
     return fetch(`api/articles?articleID=${articleID}`, {
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
      builder.addCase(getArticlesFromServer.fulfilled, (state, action) => {
         console.log("action data : ", action.payload.data);
         return action.payload.data;
         // state.concat(...action.payload.data);
       });
       builder.addCase(createANewArticle.fulfilled, (state, action) => {
         console.log("state : ", state);
         console.log("action : ", action);
       });
       builder.addCase(updateArticle.fulfilled, (state, action) => {
         console.log("state : ", state);
         console.log("action : ", action);
       });
       builder.addCase(deleteArticle.fulfilled, (state, action) => {
         console.log("delete state : ", state);
         console.log("delete action : ", action);
       });
   }
   
   
})

export default slice.reducer