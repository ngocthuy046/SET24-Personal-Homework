
import { call, put, takeEvery } from 'redux-saga/effects';

//FIXME: $3-- Rename fetchData, addData to fetchTasks, addTasks + update API link
import { fetchTasks , addTask } from '../apis/task.api'
import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
} from '../actions/task.action'

function* fetchTasksSaga() {
    try {
        const tasks = yield call(fetchTasks);
        
        yield put({ type: FETCH_TASKS_SUCCESS, payload: tasks });
    } catch(error) {
        yield put({ type: FETCH_TASKS_FAILURE, payload: error.message });
    }
}

function* addTaskSaga(action) {
    try {
        const newTask = yield call(addTask, action.payload);
        yield put({ type: ADD_TASK_SUCCESS, payload: newTask });
    } catch(error) {
        yield put({ type: ADD_TASK_FAILURE, payload: error.message })
    }
}

export default function* rootSaga() {
    yield takeEvery(FETCH_TASKS_REQUEST, fetchTasksSaga);
    yield takeEvery(ADD_TASK_REQUEST, addTaskSaga)
}

//TODO: $4 -- Function deletaTaskDaga
