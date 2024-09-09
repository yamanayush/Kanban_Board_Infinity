import { createSlice } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const tasksCollection = collection(db, "tasks");

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});


export const fetchTasks = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(tasksCollection);
    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(tasksSlice.actions.setTasks(tasks));
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export const addTask = (task) => async (dispatch) => {
  try {
    await setDoc(doc(db, "tasks", task.id), task);
    dispatch(tasksSlice.actions.addTask(task));
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

export const updateTask = (task) => async (dispatch) => {
  try {
    const taskRef = doc(db, "tasks", task.id);
    await updateDoc(taskRef, { status: task.status });
    dispatch(tasksSlice.actions.updateTask(task));
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "tasks", id));
    dispatch(tasksSlice.actions.deleteTask(id));
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

export default tasksSlice.reducer;
