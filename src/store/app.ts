import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RouteCategory {
  name: string,
  title?: string,
  show: boolean,
}
export interface RouteData {
  title: string,
  description: string,
  category: RouteCategory,
  icon: string,

}

interface Params {
  dialog?: string,
  tab?: string,
}

export interface Route {
  name: string,
  pattern: string,
  sidebar: string,
  data: RouteData,
  params?: Params,
}

interface Slice {
  route: Route,
  mobile: boolean,
  fullscreen: boolean,
  installed: boolean,
  version: string,
  builddate: string,
  loaded: boolean,
  progress: number,
};

const slice = createSlice( {
  name: 'app',
  initialState: {
    route: {},
    mobile: false,
    fullscreen: false,
    installed: false,
    version: '',
    builddate: '',
    loaded: false,
    progress: 0,
  } as Slice,
  reducers: {
    routerUpdated: ( slice, action: PayloadAction<Route> ) => {

      slice.route = action.payload;

    },
    versionAdded: ( slice, action: PayloadAction<string> ) => {
      slice.version = action.payload;
    },
    builddateAdded: ( slice, action: PayloadAction<string> ) => {
      slice.builddate= action.payload;
    },
    appInstalled: slice => {
      slice.installed = true;
    },
    fullscreenLaunched: slice => {
      slice.fullscreen = true;
    },
    fullscreenLeft: slice => {
      slice.fullscreen = false;
    },
    mediaQueryUpdated: ( slice, action: PayloadAction<boolean> ) => {

      slice.mobile = action.payload;
    },
    updateProgress: ( slice, action:PayloadAction<number> ) => {

      slice.progress = action.payload;
    },
    loadAssets: slice => {
      slice.loaded = false;
    },
    assetsLoaded: slice  => {
      slice.loaded = true;
    },
  }
} )

export const {
  appInstalled,
  routerUpdated,
  mediaQueryUpdated,
  fullscreenLaunched,
  fullscreenLeft,
  versionAdded,
  builddateAdded,

  loadAssets,
  assetsLoaded,
  updateProgress,
} = slice.actions;

// Action Creators

export default slice.reducer;
