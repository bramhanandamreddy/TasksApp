import {
  TaskState,
  TaskActionTypes,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  ADD_TASK_FAILURE,
  ADD_TASK_SUCCESS,
  ADD_TASK_REQUEST,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  TOGGLE_TASK_FAILURE,
  TOGGLE_TASK_REQUEST,
  TOGGLE_TASK_SUCCESS,
} from "../type";

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const taskReducer = (
  state = initialState,
  action: TaskActionTypes
): TaskState => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
    case ADD_TASK_REQUEST:
    case DELETE_TASK_REQUEST:
    case TOGGLE_TASK_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: action.payload };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case FETCH_TASKS_FAILURE:
    case ADD_TASK_FAILURE:
    case DELETE_TASK_FAILURE:
    case TOGGLE_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
