// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './reducers/reducer';

const store = configureStore({
    reducer: {
      sidebar: sidebarReducer,
    },
  });

export default store;
