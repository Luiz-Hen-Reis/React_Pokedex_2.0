import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { USER_FETCH } from "../../utils/axios";
import { toast } from "react-toastify";
import {
  ADD_USER_TO_LOCAL_STORAGE,
  GET_USER_FROM_LOCAL_STORAGE,
  REMOVE_USER_FROM_LOCAL_STORAGE,
} from "../../utils/localStorage";

const initialState = {
  user: GET_USER_FROM_LOCAL_STORAGE(),
  isLoading: false,
};

export const REGISTER_USER = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await USER_FETCH.post("/auth/register", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const LOGIN_USER = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await USER_FETCH.post("/auth/login", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state) => {
      state.user = null;
      REMOVE_USER_FROM_LOCAL_STORAGE();
    },
  },
  extraReducers: {
    [REGISTER_USER.pending]: (state) => {
      state.isLoading = true;
    },
    [REGISTER_USER.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      toast.success(`Hello There ${user.name}`);
    },
    [REGISTER_USER.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [LOGIN_USER.pending]: (state) => {
      state.isLoading = true;
    },
    [LOGIN_USER.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      ADD_USER_TO_LOCAL_STORAGE(user);
      toast.success(`Welcome Back ${user.name}`);
    },
    [LOGIN_USER.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
