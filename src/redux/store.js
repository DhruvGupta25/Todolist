import { createStore, applyMiddleware } from 'redux';
import { addTask } from './reducer/addTask.reducer';
import logger from 'redux-logger';

export const store = createStore(
    addTask,
    applyMiddleware(logger)
);