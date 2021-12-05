const initialState = {
    task: [],
    text: '',
    selected: undefined,
}
const setPersist = (task) => window.localStorage.setItem("task2", JSON.stringify(task));
export const addTask = (state = initialState, action) => {
    switch (action.type) {
        case 'PERSIST_TASK':
            const task = JSON.parse(window.localStorage.getItem("task2"))
            return {
                ...state,
                task: task ? task : []
            }
        case 'ADD_TEXT':
            return {
                ...state,
                text: action.payload
            };

        case 'ADD_TASK':
            const task2 = state.task.concat(action.payload)
            window.localStorage.setItem('task2', JSON.stringify(task2))
            return {
                ...state,
                task: task2,
                text: " "
            };

        case 'DELETE_TASK':
            const task3 = state.task.filter((task, i) => i !== action.payload)
            setPersist(task3)
            return {
                ...state,
                task: state.task.filter((task, i) => i !== action.payload)
            };
        case 'EDIT_TASK':
            return {
                ...state,
                text: state.task[action.payload],
                selected: action.payload
            };
        case 'EDIT_ADD_TASK':
            const task4 = state.task.map((task, i) =>
                i !== action.payload.selected ? task : action.payload.value
            )
            setPersist(task4);
            return {
                ...state,
                task: state.task.map((task, i) =>
                    i !== action.payload.selected
                        ? task
                        : action.payload.value),
                selected: undefined,
                text: ""
            };
        case 'DELETE_ALL':
            setPersist([]);
            return {
                ...state,
                task: [],
                text: ''
            };
        default:
            return state;
    }
};
