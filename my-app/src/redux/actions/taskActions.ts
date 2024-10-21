import { Dispatch } from "redux";

import axios from "axios";

import {
  Task,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  TOGGLE_TASK_REQUEST,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAILURE,
  TaskActionTypes,
} from "../type";
// import { title } from "process";
// import { error } from "console";

const API_URL = "http://localhost:5000/tasks";

export const fetchtask = () => {
  return async (dispatch: Dispatch<TaskActionTypes>) => {
    dispatch({ type: FETCH_TASKS_REQUEST });
    try {
      const response = await axios.get<Task[]>(API_URL);
      dispatch({ type: FETCH_TASKS_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: FETCH_TASKS_FAILURE, payload: error.message });
    }
  };
};

export const addTask = (title: string) => {
  return async (dispatch: Dispatch<TaskActionTypes>) => {
    dispatch({ type: ADD_TASK_REQUEST });
    try {
      const newTask: Omit<Task, "id"> = { title, completed: false };
      const response = await axios.post<Task>(API_URL, newTask);
      dispatch({ type: ADD_TASK_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: ADD_TASK_FAILURE, payload: error.message });
    }
  };
};

export const deleteTask = (id: number) => {
  return async (dispatch: Dispatch<TaskActionTypes>) => {
    dispatch({ type: DELETE_TASK_REQUEST });
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch({ type: DELETE_TASK_SUCCESS, payload: id });
    } catch (error: any) {
      dispatch({ type: DELETE_TASK_FAILURE, payload: error.message });
    }
  };
};

export const toggleTask = (task: Task) => {
  return async (dispatch: Dispatch<TaskActionTypes>) => {
    dispatch({ type: TOGGLE_TASK_REQUEST });
    try {
      const updatedTask = { ...task, completed: !task.completed };
      const response = await axios.put<Task>(
        `${API_URL}/${task.id}`,
        updatedTask
      );
      dispatch({ type: TOGGLE_TASK_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: TOGGLE_TASK_FAILURE, payload: error.message });
    }
  };
};
