import { createSlice } from "@reduxjs/toolkit";
import fetchData, { deleteData } from "./dataActions";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    updateData: (state, action) => {
      const newData = state.data.map((i) =>
        i.id == action.payload.id ? action.payload : i
      );
      state.data = newData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteData.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = state.data.filter((i) => i.id !== action.payload);
      })
      .addCase(deleteData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { addData, updateData } = dataSlice.actions;

export default dataSlice.reducer;
