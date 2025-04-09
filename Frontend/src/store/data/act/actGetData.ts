import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/api/axiosInstance";

const actGetData = createAsyncThunk(
  "values/getData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/values");
       return response.data;
    } catch (err: any) {
      const message =
        err?.response?.data?.message || err?.message || "Error fetching values";
      return rejectWithValue({ message });
    }
  }
);

export default actGetData;
