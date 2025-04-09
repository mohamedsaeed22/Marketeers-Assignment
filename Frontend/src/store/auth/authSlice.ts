import { createSlice } from "@reduxjs/toolkit";
import actLogin from "./act/actLogin";
import CookieService from "../../services/CookieService";
import { createStandaloneToast } from "@chakra-ui/react";
import { isString } from "@/types/guards";
import { TLoading } from "@/types";

const { toast } = createStandaloneToast();

type IAuthState = {
  accessToken: string | null;
  loading: TLoading;
  error: string | null;
};

const initialState: IAuthState = {
  accessToken: CookieService.get("token") || null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Logout: (state) => {
      CookieService.remove("token");
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actLogin.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      const myToken = payload?.data?.token;
      if (myToken) {
        toast({
          title: "Login successful",
          status: "success",
          duration: 4000,
          position: "top",
        });
        CookieService.set("token", myToken);
        state.accessToken = myToken;
      } else {
        state.error = "No access token received.";
      }
    });

    builder.addCase(actLogin.rejected, (state, action: any) => {
      state.loading = "failed";
      console.log(action.payload);
      if (isString(action.payload?.title)) {
        toast({
          title: action.payload.title,
          status: "error",
          duration: 4000,
          position: "top",
        });
      }
      state.error = action.payload?.title || "Login failed";
    });
  },
});

export const { Logout } = authSlice.actions;
export default authSlice.reducer;
