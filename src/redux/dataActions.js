import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk("data/fetchData", async () => {
  const res = await axios.get("http://localhost:3000/data");
  return res.data;
});

export default fetchData;
