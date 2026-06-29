import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./fetures/searchSlice"



export const store=configureStore({

    reducer:{
        search:searchReducer
    }

})