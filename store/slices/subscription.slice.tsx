import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {
  getSubscriptionsApi,
} from "../../util/api";

export const getSubscriptions = createAsyncThunk(
  "subscription/getSubscriptions",
  async (payload: any) => {
    return (await getSubscriptionsApi(payload)) || {};
  }
);

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    packages: {
      loading: "IDLE",
      data: [],
      meta: null,
    },
  },
  reducers: {

    setSubscriptions: (state, action) => {
      state.packages = {
        ...state.packages, ...action.payload,
      };
    },
  },
  extraReducers: {
    //@ts-ignore
    [getSubscriptions.pending]: (state, action) => {
      state.packages = {
        ...state.packages,
        loading: "LOADING",
      };
    },
    //@ts-ignore
    [getSubscriptions.fulfilled]: (state, action) => {
      state.getSubscriptions = {
        ...state.packages,
        ...action.payload,
        loading: "SUCCEEDED",
      };
    },
    //@ts-ignore
    [getSubscriptions.rejected]: (state, action) => {
      state.packages = {
        ...state.packages,
        ...action.payload,
        loading: "ERRORED",
      };
    },
  },
});

export const selectSubscriptions = (state) => state.bet.searchBets;

export const {setSubscriptions} =
  subscriptionSlice.actions;

export default subscriptionSlice.reducer;
