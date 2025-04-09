import { createSlice } from "@reduxjs/toolkit";
import actGetData from "./act/actGetData";
import { TLoading } from "@/types";

type ValueType = {
  id: number;
  name: string;
  value: number;
  percentage?: number;
};

interface ValuesState {
  values: ValueType[];
  loading: TLoading;
  error: string | null;
}

const initialState: ValuesState = {
  values: [],
  loading: "idle",
  error: null,
};

const valuesSlice = createSlice({
  name: "values",
  initialState,
  reducers: {
    socketUpdatePercentage: (state, action) => {
      const { id, percentage } = action.payload;
      state.values = state.values.map((value) =>
        value.id === id ? { ...value, percentage } : value
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetData.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetData.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.values = payload;
    });
    builder.addCase(actGetData.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload?.message || "Failed to load values";
    });
  },
});
export const { socketUpdatePercentage } = valuesSlice.actions;
 
export default valuesSlice.reducer;
