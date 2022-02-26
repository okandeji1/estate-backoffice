import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {
  getPropertiesApi,
} from "../../util/api";

export const getProperties = createAsyncThunk(
  "property/getProperties",
  async (payload: any) => {
    return (await getPropertiesApi(payload)) || {};
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState: {
    properties: {
      loading: "IDLE",
      data: [],
      meta: null,
    },
  },
  reducers: {

    setProperties: (state, action) => {
      state.properties = {
        ...state.properties, ...action.payload,
      };
    },
  },
  extraReducers: {
    //@ts-ignore
    [getProperties.pending]: (state, action) => {
      state.properties = {
        ...state.properties,
        loading: "LOADING",
      };
    },
    //@ts-ignore
    [getProperties.fulfilled]: (state, action) => {
      state.getProperties = {
        ...state.getProperties,
        ...action.payload,
        loading: "SUCCEEDED",
      };
    },
    //@ts-ignore
    [getProperties.rejected]: (state, action) => {
      state.properties = {
        ...state.properties,
        ...action.payload,
        loading: "ERRORED",
      };
    },
  },
});

export const selectProperties = (state) => state.property.properties.getProperties;

export const {setProperties} =
  propertySlice.actions;

export default propertySlice.reducer;
