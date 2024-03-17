import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk("data/fetchData", async () => {
  const res = await axios.get("http://localhost:3000/data");
  return res.data;
});

export const deleteData = createAsyncThunk("data/deleteData", async (id) => {
  await axios.delete(`http://localhost:3000/data/${id}`);
  return id;
});

export default fetchData;
