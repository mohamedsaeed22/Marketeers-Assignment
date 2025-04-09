import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserCredentials } from "@/types/types";
import { api } from "@/api/axiosInstance";

const actLogin = createAsyncThunk(
  "auth/login",
  async (credentials: UserCredentials, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/login", credentials);
      return res.data;
    } catch (err: any) {
      const message =
        err?.response?.data?.message || err?.message || "Login error";
      return rejectWithValue({ title: message });
    }
  }
);

export default actLogin;
