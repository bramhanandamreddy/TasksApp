export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

export const FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";

export const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE";

export const DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";

export const TOGGLE_TASK_REQUEST = "TOGGLE_TASK_REQUEST";
export const TOGGLE_TASK_SUCCESS = "TOGGLE_TASK_SUCCESS";
export const TOGGLE_TASK_FAILURE = "TOGGLE_TASK_FAILURE";

interface FetchTasksRequestAction {
  type: typeof FETCH_TASKS_REQUEST;
}

interface FetchTasksSuccessAction {
  type: typeof FETCH_TASKS_SUCCESS;
  payload: Task[];
}

interface FetchTasksFailureAction {
  type: typeof FETCH_TASKS_FAILURE;
  payload: string;
}

interface AddTaskRequestAction {
  type: typeof ADD_TASK_REQUEST;
}

interface AddTaskSuccessAction {
  type: typeof ADD_TASK_SUCCESS;
  payload: Task;
}

interface AddTaskFailureAction {
  type: typeof ADD_TASK_FAILURE;
  payload: string;
}

interface DeleteTaskRequestAction {
  type: typeof DELETE_TASK_REQUEST;
}

interface DeleteTaskSuccessAction {
  type: typeof DELETE_TASK_SUCCESS;
  payload: number;
}

interface DeleteTaskFailureAction {
  type: typeof DELETE_TASK_FAILURE;
  payload: string;
}

interface ToggleTaskRequestAction {
  type: typeof TOGGLE_TASK_REQUEST;
}

interface ToggleTaskSuccessAction {
  type: typeof TOGGLE_TASK_SUCCESS;
  payload: Task;
}

interface ToggleTaskFailureAction {
  type: typeof TOGGLE_TASK_FAILURE;
  payload: string;
}

export type TaskActionTypes =
  | FetchTasksRequestAction
  | FetchTasksSuccessAction
  | FetchTasksFailureAction
  | AddTaskFailureAction
  | AddTaskSuccessAction
  | AddTaskRequestAction
  | ToggleTaskFailureAction
  | ToggleTaskRequestAction
  | ToggleTaskSuccessAction
  | DeleteTaskFailureAction
  | DeleteTaskRequestAction
  | DeleteTaskSuccessAction;
