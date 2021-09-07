import { combineReducers } from '@reduxjs/toolkit';

import entities from './entities';
import app from './app';
import ui from './ui';


const rootReducer = combineReducers( {
    entities,
    app,
    ui,
} );

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>
