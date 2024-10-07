import { createSlice } from "@reduxjs/toolkit";
import { getInvitationCategoryes } from "./InvitationApiHome";

const initialState = {
  data: {},
   status: 'idle',
   error: null,
   loading: true, 
   };

const invitationSlice = createSlice({
    name: 'invitation',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(getInvitationCategoryes.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(getInvitationCategoryes.fulfilled, (state, action) => {
            
            state.data = action.payload
            state.loading = false
             state.status = 'succes';
          })
          .addCase(getInvitationCategoryes.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
            state.loading = false
          });
    },
 });
 

export const selectInvitation = (state) => state.invitation
export const selectInvitationData = (state) => state.invitation.data
export const selectInvitationLoading = (state) => state.invitation.loading

 export const {} = invitationSlice.actions

export const invitationReducer =  invitationSlice.reducer