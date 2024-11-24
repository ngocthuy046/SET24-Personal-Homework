//TODO: 4- taskReducer
import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILURE
} from '../actions/task.actions'

const initialState = {
    tasks: [],
    loading: false,
    error: null
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        //Fetch Tasks
        case FETCH_TASKS_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_TASKS_SUCCESS:
            return { ...state, loading: false, list: action.payload };

        case FETCH_TASKS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        //Add Task
        case ADD_TASK_REQUEST:
            return { ...state, loading: true, error: null };

        case ADD_TASK_SUCCESS:
            return { ...state, loading: false, list: [...state.tasks, action.payload] };

        case ADD_TASK_FAILURE:
            return { ...state, loading: false, error: action.payload };

        //Delete Task
        case DELETE_TASK_REQUEST:
            return { ...state, loading: true, error: null };

        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };

        case DELETE_TASK_FAILURE:
            return { ...state, loading: false, error: action.payload };
    }
}

export default taskReducer