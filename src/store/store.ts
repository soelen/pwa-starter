import { configureStore, Action, } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk'
import reducer, {
  // RootReducer
} from './reducer';

// const preloadedState: DeepPartial<RootReducer> = loadState();

const store = configureStore( {
  reducer,
  middleware:  ( getDefaultMiddleware ) => getDefaultMiddleware().concat(
  ),
  // preloadedState: preloadedState,
} );

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

// store.subscribe(() => saveState( store.getState() ) );
