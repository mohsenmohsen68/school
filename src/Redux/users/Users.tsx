import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface people {
    __v: number,
_id: string,
age: number,
fathersName: string,
firstName: string,
grade:string,
img: string,
lastName:string,
password: string,
phoneNumber:string,
role: string,
school: string,
userCode: string,
userName: string,
}

export const getUsersFromServer = createAsyncThunk(
    "users/getUsersFromServer",
    async (url:string)=>{
    console.log("url : ",url)
    return fetch(url).then(res=>res.json()).then(data=>data)
})

const slice = createSlice({
    name:'users',
    initialState:[], 
    reducers:{},

    extraReducers: builder=>{
        builder.addCase(getUsersFromServer.fulfilled, (state:people[],action)=>{
            // console.log("state : ",state)
            // console.log("actions : ",action.payload.data)
            state.push(...action.payload.data) 
        })
    }
})


export default slice.reducer;
// interface User {
//     firstName: "",
//     lastName: "",
//     userName: "",
//     userCode: "",
//     fathersName: "",
//     school: "",
//     age: "",
//     grade: "",
//     phoneNumber: "",
//     password: "",
//     password2: "",
//     img: ""
//   }

//   type Actions = {
//     type:string,
//     payload:string
//   }

// export const AddUserAction = (user:User)=>{
//     return{
//         type:"ADD_USER",
//         payload:user
//     }
// }
// export const UpdateUserAction = (user:User)=>{
//     return{
//         type:"UPDATE_USER",
//         payload:user
//     }
// }
// export const DeleteUserAction = (id:number)=>{
//     return{
//         type:"DELETE_USER",
//         payload:id
//     }
// }

// const UserReducer=(state:User[], action:Actions)=>{
//     switch(action.type){
//         case "DELETE_USER":{
            
//         }
//         case "ADD_USER":{

//         }
//         case "UPDATE_USER":{

//         }
//         case Default:{
//            return state;
//         }
//     }

// }
// export default UserReducer;

