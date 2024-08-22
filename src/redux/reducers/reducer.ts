// src/redux/reducer.ts
import { TOGGLE_SIDEBAR } from '../actionTypes/actionTypes';

interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState: SidebarState = {
  isSidebarOpen: true,
};

const sidebarReducer = (state = initialState, action: any): SidebarState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
