import { createSlice } from "@reduxjs/toolkit";
import { getProjectPage } from "./ProjectPageApi";

const initialState = {
  data: {
    projects: [
        {
            name: '',
            process_time: '',
            creation_date_at: '',
            link_project: '',
            link_app_store: '',
            link_play_market: '',
            project_language: '',
            type: '',
            images: '',
            translation: ''
          }
    ]
    },
   status: 'idle',
   error: null,
   };

const projectPageSlice = createSlice({
    name: 'projectPage',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(getProjectPage.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(getProjectPage.fulfilled, (state, action) => {
            
            state.data.projects = [...action.payload.data]
             state.status = 'succes';

             console.log(state.data.projects,2222);
          })
          .addCase(getProjectPage.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
 });
 

export const selectProjectPage = (state) => state.projectPage
export const selectProjectPageData = (state) => state.projectPage.data.projects


 export const {} = projectPageSlice.actions

export const projectPageReducer =  projectPageSlice.reducer