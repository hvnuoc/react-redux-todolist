// action with object
// export const addTodoAction = {
//     type: "addTodo",
//     payload: {
//         id: 4,
//         name: "Learn C#",
//         completed: false,
//         priority: "Low",
//     },
// };

// action creators => function

export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: 'filters/searchFilterChange',
    payload: text,
  };
};

export const statusFilterChange = (data) => {
  return {
    type: 'filters/statusFilterChange',
    payload: data,
  };
};

export const prioritiesFilterChange = (priorities) => {
  return {
    type: 'filters/prioritiesFilterChange',
    payload: priorities,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: 'todoList/toggleTodoStatus',
    payload: todoId,
  };
};
