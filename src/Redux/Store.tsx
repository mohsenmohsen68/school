import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './users/Users'
import menuOptions from './CMS/CMSRoutes'
import ArticleReducer from './articles/Articles'
import PostReducer from './posts/Posts'
import CommentsReducer from './comments/Comments'
import CourseReducer from './courses/Courses'
import ClusterReducer from "./clusters/Clusters"


const store = configureStore({
    reducer:{
        users : UserReducer, 
        articles : ArticleReducer,
        posts: PostReducer,
        comments: CommentsReducer,
        courses: CourseReducer,
        menuOptions : menuOptions,
        clusters: ClusterReducer,

    }
})

export default store
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']