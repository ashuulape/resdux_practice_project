import { createSlice } from "@reduxjs/toolkit";

const SearchSlice=createSlice({
    name:'search',
    initialState:{
        query:"",
        activeTab:'photos',
        results:[],
        loading:false,
        error:null
    },
    

    reducers:{
        setQuery(state,action){
            state.query=action.payload
        },
        setActiveTabs(state,action){
            state.activeTab=action.payload
        },
        setLoading(state){
            state.loading=true,
            state.error=null
        },
        setResults(state,action){
            state.loading=false
            state.results=action.payload
        },
        setError(state,action){
            state.error=action.payload
            state.loading=false
        },
        clearResults(state){
            state.results=[]
        }
    }
})

export const{setQuery,setActiveTabs,setLoading,setResults,setError,clearResults}=SearchSlice.actions

export default SearchSlice.reducer