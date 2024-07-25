import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        taskId: "T001",
        taskDate: "15/07/2024",
        taskList: [
          {
            task: "Get Groceries from the market",
            status: "Pending",
          },
          {
            task: "Go to the Gym",
            status: "Completed",
          },
          {
            task: "Water the plants",
            status: "Completed",
          },
        ],
      },
      {
        taskId: "T002",
        taskDate: "16/07/2024",
        taskList: [
          {
            task: "Go to the Park",
            status: "Completed",
          },
          {
            task: "Get My Room Cleaned",
            status: "Pending",
          },
        ],
      },
    ],
  },
  reducers: {},
});

export default taskSlice.reducer;
