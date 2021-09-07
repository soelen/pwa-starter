import { createSlice, } from "@reduxjs/toolkit";

export interface Message {
  content: string,
  type: 'error' | 'info',
}

interface State {
  open: boolean,
};

const slice = createSlice( {
  name: 'drawer',
  initialState: {
    open: false,
  } as State,
  reducers: {
    openDrawer: ( slice ) => {
      slice.open = true;
    },
    closeDrawer: ( slice ) => {
      slice.open = false;
    },
  }
} );

export const {
  closeDrawer,
  openDrawer,
} = slice.actions;

export default slice.reducer;
