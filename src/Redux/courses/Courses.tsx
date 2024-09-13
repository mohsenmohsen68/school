import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getCoursesFromServer = createAsyncThunk(
   "course/getCoursesFromServer",
   async () => {
     return fetch('/api/course')
       .then((res) => res.json())
       .then((data) => data);
   }
 );
 
 export const createANewCourse = createAsyncThunk(
   "course/createANewCourse",
   async (courseBody) => {
     console.log("nnnn : ", courseBody);
     return fetch("/api/course", {
       method: "POST",
       body: JSON.stringify(courseBody),
       headers: {
         Content_Type: "application/json"
       }
     })
       .then((res) => res.json())
       .then((data) => data);
   }
 );
 
 export const updateCourse = createAsyncThunk(
   "course/updateCourse",
   async (courseBody) => {
     console.log("nnnn : ", courseBody);
     return fetch("api/course", {
       method: "PUT",
       body: JSON.stringify(courseBody),
       headers: {
         Content_Type: "application/json"
       }
     })
       .then((res) => res.json())
       .then((data) => data);
   }
 );

 export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (courseID:string) => {
    console.log("nnnn : ", courseID);
    return fetch(`api/course?courseID=${courseID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);


const slice = createSlice({
   name:'course',
   initialState:[],
   reducers:{

   },
    extraReducers: builder =>{
      builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
         console.log("action data : ", action.payload.data);
         return action.payload.data;
         // state.concat(...action.payload.data);
       });
       builder.addCase(createANewCourse.fulfilled, (state, action) => {
         console.log("state : ", state);
         console.log("action : ", action);
       });
       builder.addCase(updateCourse.fulfilled, (state, action) => {
         console.log("state : ", state);
         console.log("action : ", action);
       });
       builder.addCase(deleteCourse.fulfilled, (state, action) => {
         console.log("state : ", state);
         console.log("action : ", action);
       });
   }
   
})

export default slice.reducer