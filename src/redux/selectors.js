import { createSelector } from 'reselect';

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priorities;

//Lọc data theo điều kiện của state search
// export const todoListSelector = (state) => {
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });
//   return todosRemaining;
// };

// Xử lý khi cần gọi đến 2 selector lồng nhau
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  prioritiesFilterSelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
