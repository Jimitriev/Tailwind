import { configureStore } from '@reduxjs/toolkit';
import uxuiReducer from '../reducers/uxuiReducer';

const store = configureStore({
  reducer: {
    'uxuiReducer': uxuiReducer.reducer,
  }
})

export default store;