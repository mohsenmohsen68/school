import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsFromServer = createAsyncThunk(
  "posts/getPostsFromServer",
  async () => {
    return fetch("api/post")
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const createANewPost = createAsyncThunk(
  "posts/createANewPost",
  async (postBody) => {
    console.log("nnnn : ", postBody);
    return fetch("api/post", {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        Content_Type: "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (postBody) => {
    console.log("nnnn : ", postBody);
    return fetch("api/post", {
      method: "PUT",
      body: JSON.stringify(postBody),
      headers: {
        Content_Type: "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postID: string) => {
    return fetch(`/api/post/?postID=${postID}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPostsFromServer.fulfilled, (state, action) => {
      console.log("state : ", state);
      console.log("state : ", action);
      return action.payload.data;
    }),
      builder.addCase(createANewPost.fulfilled, (state, action) => {
        console.log("state : ", state);
        console.log("state : ", action);
      }),
      builder.addCase(updatePost.fulfilled, (state, action) => {
        console.log("state : ", state);
        console.log("action : ", action);
      });
      builder.addCase(deletePost.fulfilled, (state, action) => {
        console.log("state : ", state);
        console.log("action : ", action);
      });
  }
});

export default slice.reducer;
