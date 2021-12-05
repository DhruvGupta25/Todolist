export const persistTask =() =>({
   type: 'PERSIST_TASK'
});

export const addText = value => ({
   type: 'ADD_TEXT',
   payload: value
})

export const addTask = task => ({
   type: 'ADD_TASK',
   payload: task
})

export const deleteTask = key =>({
   type: 'DELETE_TASK',
   payload: key
});

export const editTask = key =>({
  type: 'EDIT_TASK',
  payload: key
})

export const editAddTask = obj =>({
  type: 'EDIT_ADD_TASK',
  payload: obj
})

export const deleteAll = () =>({
   type: 'DELETE_ALL'
})