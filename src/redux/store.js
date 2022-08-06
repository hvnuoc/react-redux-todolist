// import { createStore } from 'redux';
// import rootReducer from './reducer';

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSlice';
import todosSlice from '../components/TodoList/todosSlice';

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default store;
