import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {
  getPackagesApi,
} from "../../util/api";

export const getPackages = createAsyncThunk(
  "package/getPackages",
  async (payload: any) => {
    return (await getPackagesApi(payload)) || {};
  }
);

const packageSlice = createSlice({
  name: "package",
  initialState: {
    packages: {
      loading: "IDLE",
      data: [],
      meta: null,
    },
  },
  reducers: {

    setPackages: (state, action) => {
      state.packages = {
        ...state.packages, ...action.payload,
      };
    },
  },
  extraReducers: {
    //@ts-ignore
    [getPackages.pending]: (state, action) => {
      state.packages = {
        ...state.packages,
        loading: "LOADING",
      };
    },
    //@ts-ignore
    [getPackages.fulfilled]: (state, action) => {
      state.getPackages = {
        ...state.packages,
        ...action.payload,
        loading: "SUCCEEDED",
      };
    },
    //@ts-ignore
    [getPackages.rejected]: (state, action) => {
      state.packages = {
        ...state.packages,
        ...action.payload,
        loading: "ERRORED",
      };
    },
  },
});

export const selectPackages = (state) => state.package.packages.getPackages;

export const {setPackages} =
  packageSlice.actions;

export default packageSlice.reducer;
