import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const tweetsServices = axios.create({
  baseURL: "https://64798bc1a455e257fa634e3c.mockapi.io",
  params: {
    page: 1,
    limit: 3,
  },
});

export const getAll = createAsyncThunk(
  "cards/getAll",
  async (page, thunkAPI) => {
    try {
      const { data } = await tweetsServices.get("tweets", {
        params: page,
      });
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
      const { data } = await tweetsServices.put(
        `tweets/${credentials.id}`,
        credentials
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
