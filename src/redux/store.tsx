// src/redux/store.ts
import { createStore } from 'redux';
import sidebarReducer from './reducer';

const store = createStore(sidebarReducer);

export default store;
