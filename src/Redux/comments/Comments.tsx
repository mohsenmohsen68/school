import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCommentsFromServer = createAsyncThunk(
  "comments/getCommentsFromServer",
  async () => {
    return fetch("/api/comment")
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const AddANewComment = createAsyncThunk(
  "comments/AddANewComment",
  async (commentBody) => {
   return fetch("/api/comment", {
     method: "POST",
     body: JSON.stringify(commentBody),
     headers: {
       Content_Type: "application/json"
     }
   })
    .then((res) => res.json())
    .then((data) => data);
 }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentID:string) => {
    return fetch(`api/comment?id=${commentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const updateComment = createAsyncThunk(
  "comment/updateComment",
  async (commentBody) => {
    console.log("nnnn : ", commentBody);
    return fetch("api/comment", {
      method: "PUT",
      body: JSON.stringify(commentBody),
      headers: {
        Content_Type: "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentsFromServer.fulfilled, (state, action) => {
      console.log("action data : ", action.payload.data);
      return action.payload.data;
    });
    builder.addCase(AddANewComment.fulfilled, (state, action) => {
      console.log("state : ", state);
      console.log("action : ", action);
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      console.log("state : ", state);
      console.log("action : ", action);
    });
    builder.addCase(updateComment.fulfilled, (state, action) => {
      console.log("state : ", state);
      console.log("action : ", action);
    });
  }
});

export default slice.reducer;
