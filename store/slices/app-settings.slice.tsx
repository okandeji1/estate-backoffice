import {createSlice} from "@reduxjs/toolkit";

const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState: {
    showProfile: false,
    showTransferFund: false,
    showTransferToUser: false,
    showLoginUser: false,
    showAuthUser: {
      action: "",
      visible: false,
    },


    // tenant
    showUser: false,
    showProfileOne: {
      user: null,
    },

    updateUser: {
      visible: false,
      data: {
        phone: "",
        firstName: "",
        lastName: "",
      },
    },
  },

  reducers: {
    setShowProfile: (state, action) => {
      state.showProfile = action.payload;
    },

    // tenant
    setShowUser: (state, action) => {
      state.showUser[action.payload.role] = action.payload.show;
    },

    setShowProfileOne: (state, action) => {
      state.showProfileOne[action.payload.role] = action.payload.show;
      state.showProfileOne.user = action.payload.user;
    },

    setUpdateUser: (state, action) => {
      state.updateUser = action.payload;
    },

    setShowLoginUser: (state, action) => {
      state.showLoginUser = action.payload;
    },

    setShowAuthenticateUser: (state, action) => {
        state.showAuthUser = action.payload;
      },
  },
});

export const selectShowProfile = (state) => state.appSettings.showProfile;
// Login user
export const selectShowLoginUser = (state) => state.appSettings.showLoginUser;

export const selectShowAuthenticateUser = (state) => state.appSettings.showAuthUser;

// tenant
export const selectShowUser = (state) => state.appSettings.showUser;

export const selectShowProfileOne = (state) => state.appSettings.showProfileOne;

export const selectUpdateUser = (state) => state.appSettings.updateUser;

export const {
  setShowProfile,
  setShowLoginUser,
  setShowUser,
  setShowProfileOne,
  setUpdateUser,
  setShowAuthenticateUser,
} = appSettingsSlice.actions;

export default appSettingsSlice.reducer;
