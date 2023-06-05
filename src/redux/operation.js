import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64798bc1a455e257fa634e3c.mockapi.io";

export const getAll = createAsyncThunk(
  "cards/getAll",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get("tweets");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateById = createAsyncThunk(
  "cards/updateById",
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);
      const { data } = await axios.put(`tweets/${credentials.id}`, {
        ...credentials,
      });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
