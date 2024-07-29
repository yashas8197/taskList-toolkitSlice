import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch tasks from the API
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(
    "https://task-list-hw-server-Student-neoG-Ca.replit.app/tasks",
  );
  return response.data;
});

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
  },
  reducers: {
    statusButtonPresses: (state, action) => {
      const taskId = action.payload;

      for (const dateObj of state.tasks) {
        const task = dateObj.tasks.find((task) => task.taskId === taskId);

        if (task) {
          task.taskStatus =
            task.taskStatus === "Pending" ? "Completed" : "Pending";
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "success";
        state.tasks = action.payload.tasks;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload.message;
      });
  },
});

export const { statusButtonPresses } = taskSlice.actions;

export default taskSlice.reducer;
