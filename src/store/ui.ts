import { combineReducers, } from '@reduxjs/toolkit';

import drawer from './drawer';

const ui = combineReducers( {
  drawer,
} );

export default ui;
