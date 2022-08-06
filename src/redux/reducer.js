import { combineReducers } from 'redux';
import filterReducer from '../components/Filters/filtersReducer';
import todoListReducer from '../components/TodoList/todosReducer';

// filters, todoList tương ứng với các state trong các reducers
const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
