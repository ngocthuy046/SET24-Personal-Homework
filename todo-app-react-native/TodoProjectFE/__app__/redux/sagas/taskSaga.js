//TODO: 9- taskSaga

import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTasksAPI, addTaskAPI, deleteTaskAPI, updateTaskAPI } from '../../apis/taskApi';
import {
    fetchTasksSuccess,
    fetchTasksFailure,
    addTaskSuccess,
    addTaskFailure,
    deleteTaskSuccess,
    deleteTaskFailure,
    updateTaskSuccess,
    updateTaskFailure,
} from '../actions/task.actions'

// Worker Saga: Fetch Tasks
function* fetchTasksSaga() {
    try {
        const tasks = yield call(fetchTasksAPI);
        yield put(fetchTasksSuccess(tasks));
    } catch (error) {
        yield put(fetchTasksFailure(error.message));
    }
}

// Worker Saga: Add Task
function* addTaskSaga(action) {
    try {
        const newTask = yield call(addTaskAPI, action.payload);
        yield put(addTaskSuccess(newTask));
    } catch (error) {
        yield put(addTaskFailure(error.message));
    }
}

// Worker Saga: Delete Task
function* deleteTaskSaga(action) {
    try {
        yield call(deleteTaskAPI, action.payload);
        yield put(deleteTaskSuccess(action.payload));
    } catch (error) {
        yield put(deleteTaskFailure(error.message));
    }
}

function* updateTaskSaga(action) {
    try {
        const task = action.payload;

        if (!task || !task.id) {
            throw new Error('Missing task or task ID in payload');
        }

        // Gửi API cập nhật task
        const updatedResponse = yield call(updateTaskAPI, task.id, task);
        console.log('API response:', updatedResponse);
        yield put(updateTaskSuccess(updatedResponse)); // Dispatch action với task đã cập nhật
    } catch (error) {
        console.error('Error in updateTaskSaga:', error.message);
        yield put(updateTaskFailure(error.message));
    }
}


// Watcher Saga
export default function* watchTasks() {
    yield takeEvery('FETCH_TASKS_REQUEST', fetchTasksSaga);
    yield takeEvery('ADD_TASK_REQUEST', addTaskSaga);
    yield takeEvery('DELETE_TASK_REQUEST', deleteTaskSaga);
    yield takeEvery('UPDATE_TASK_REQUEST', updateTaskSaga);
}