//TODO: 10- rootSaga
import { all } from 'redux-saga/effects';
import watchTasks from './taskSaga';

export default function* rootSaga() {
  yield all([
    watchTasks(), // Include all task-related sagas
  ]);
}
