import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import router from "next/router";
import axios from "axios";
import {
  getUsersApi,
  getUserApi,
  loginApi,
  registerUserApi,
} from "../../util/api";

export const getUser = createAsyncThunk("user/getUser", async () => {
  return await getUserApi();
});

export const login = createAsyncThunk("user/login", async (payload: any) => {
  return await loginApi(payload);
});

export const registerUser = createAsyncThunk("user/registerUser", async (payload: any) => {
    return await registerUserApi(payload);
  });

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (payload: any) => {
    return await getUsersApi(payload);
  }
);

// TODO: Implement this endpoint
// export const changePassword = createAsyncThunk(
//   "user/changePassword",
//   async (payload: any) => {
//     return await changePasswordApi(payload);
//   }
// );

// export const updateData = createAsyncThunk(
//   "user/updateData",
//   async (payload: any) => {
//     return await updateDataApi(payload);
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      loading: "IDLE",
      data: {
        accessToken: null,
        role: null,
      },
      status: false,
    },

    logout: true,
    isAuthenticated: false,
    users: {
      loading: "IDLE",
      data: [],
      aggregate: [],
      status: false,
      meta: null,
    },
    // changePassword: {
    //   loading: "IDLE",
    //   data: {},
    //   status: false,
    //   payload: {
    //     password: "",
    //     newPassword: "",
    //     username: "",
    //     visible: false,
    //   },
    // },

    // updateData: {
    //   loading: "IDLE",
    //   data: {},
    //   status: false,
    //   payload: {
    //     password: "",
    //     username: "",
    //     visible: false,
    //   },
    // },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = {...state.user, ...action.payload};
      state.isAuthenticated = true;
    },

    setToken: (state, action) => {
      state.user.data.accessToken = action.payload;
    },

    // setLogout: (state) => {
    //   router.push("/sign-in");
    //   state.user.data = null;
    //   state.logout = true;
    //   state.isAuthenticated = false;
    // },

    refresh: (state) => {
      router.push("/");
      state.user.data = null;
      state.logout = true;
      state.isAuthenticated = false;
    },

    // setChangePassword: (state, action) => {
    //   state.changePassword = {
    //     ...state.changePassword,
    //     payload: {...state.changePassword.payload, ...action.payload},
    //   };
    // },

    // setUpdateData: (state, action) => {
    //   state.updateData = {
    //     ...state.updateData,
    //     payload: {...state.updateData.payload, ...action.payload},
    //   };
    // },
  },
  extraReducers: {
    // @ts-ignore
    [login.pending]: (state, action) => {
      state.user = {
        ...state.user,
        loading: "LOADING",
      };
    },
    //@ts-ignore
    [login.fulfilled]: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
        loading: "SUCCEEDED",
      };

      router.push(`/real-estate/${state.user.data.role}/overview`);
    },
    //@ts-ignore
    [login.rejected]: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
        loading: "ERRORED",
      };
    },
    // @ts-ignore
    [getUser.pending]: (state, action) => {
      state.user = {
        ...state.user,
        loading: "LOADING",
      };
    },
    //@ts-ignore
    [getUser.fulfilled]: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
        loading: "SUCCEEDED",
      };
    },
    //@ts-ignore
    [getUser.rejected]: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
        loading: "ERRORED",
      };
    },
    //@ts-ignore
    [getUsers.pending]: (state, action) => {
      state.users = {
        ...state.users,
        loading: "LOADING",
      };
    },
    //@ts-ignore
    [getUsers.fulfilled]: (state, action) => {
      state.users = {
        ...state.users,
        ...action.payload,
        loading: "SUCCEEDED",
      };
    },
    //@ts-ignore
    [getUsers.rejected]: (state, action) => {
      state.users = {
        ...state.users,
        ...action.payload,
        loading: "ERRORED",
      };
    },
    // @ts-ignore
    // [changePassword.pending]: (state, action) => {
    //   state.changePassword = {
    //     ...state.changePassword,
    //     loading: "LOADING",
    //   };
    // },
    //@ts-ignore
    // [changePassword.fulfilled]: (state, action) => {
    //   state.changePassword = {
    //     ...state.changePassword,
    //     ...action.payload,
    //     payload: {
    //       password: "",
    //       newPassword: "",
    //       username: "",
    //       visible: false,
    //     },
    //     loading: "SUCCEEDED",
    //   };
    // },
    //@ts-ignore
    // [changePassword.rejected]: (state, action) => {
    //   state.changePassword = {
    //     ...state.changePassword,
    //     ...action.payload,
    //     payload: {
    //       password: "",
    //       newPassword: "",
    //       username: "",
    //       visible: false,
    //     },
    //     loading: "ERRORED",
    //   };
    // },

    // @ts-ignore
    // [updateData.pending]: (state, action) => {
    //   state.updateData = {
    //     ...state.updateData,
    //     loading: "LOADING",
    //   };
    // },
    //@ts-ignore
    // [updateData.fulfilled]: (state, action) => {
    //   state.updateData = {
    //     ...state.updateData,
    //     ...action.payload,
    //     payload: {
    //       password: "",
    //       username: "",
    //       visible: false,
    //     },
    //     loading: "SUCCEEDED",
    //   };
    // },
    //@ts-ignore
    // [updateData.rejected]: (state, action) => {
    //   state.updateData = {
    //     ...state.updateData,
    //     ...action.payload,
    //     payload: {
    //       password: "",
    //       username: "",
    //       visible: false,
    //     },
    //     loading: "ERRORED",
    //   };
    // },
  },
});

export const selectUser = (state) => state.user.user;

// FIXME: this is the right approach. remove state.logout codes from reducer
export const isAuthenticated = (state) => state.user.isAuthenticated;
export const selectUsers = (state) => state.user.users;

// export const selectChangePassword = (state) => state.user.changePassword;

// export const selectUpdateData = (state) => state.user.updateData;

export const {
  setUser,
  setToken,
//   setLogout,
//   setChangePassword,
//   setUpdateData,
} = userSlice.actions;

export default userSlice.reducer;
