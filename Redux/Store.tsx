import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './users/Users'


export default configureStore({
    reducer:{
        users : UserReducer, 
    }
})