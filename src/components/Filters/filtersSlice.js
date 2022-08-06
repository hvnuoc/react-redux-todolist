// const initialValue = {
//   search: '',
//   status: 'All',
//   priorities: [],
// };

// const filterReducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case 'filters/searchFilterChange':
//       return { ...state, search: action.payload };
//     case 'filters/statusFilterChange':
//       return { ...state, status: action.payload };
//     case 'filters/prioritiesFilterChange':
//       return { ...state, priorities: action.payload };
//     default:
//       return state;
//   }
// };

// export default filterReducer;

import { createSlice } from '@reduxjs/toolkit';

// createSlice: 3 param name, intialState, reducer
export default createSlice({
  name: 'filters', // bat dau khi tao reducer
  initialState: {
    search: '',
    status: 'All',
    priorities: [],
  },
  reducers: {
    // có thể viết code mutation mà không cần phải viết cú pháp copy state ..., do redux-toolkit đã tích hợp sẵn IMMER để viết code giống Imutation
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    }, // tu dong tao 1 function => {type: filters/searchFilterChange, }
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
