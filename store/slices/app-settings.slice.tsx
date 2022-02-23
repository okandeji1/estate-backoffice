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
    showAddProperty: false,
    showAddPropertyCategory: false,
    showAddPropertyType: false,
    showAddPackage: false,
    showAddPackageCategory: false,
  },

  reducers: {
    setShowProfile: (state, action) => {
      state.showProfile = action.payload;
    },

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

      setShowAddProperty: (state, action) => {
        state.showAddProperty = action.payload;
      },

      setShowAddPropertyCategory: (state, action) => {
        state.showAddPropertyCategory = action.payload;
      },

      setShowAddPropertyType: (state, action) => {
        state.showAddPropertyType = action.payload;
      },

      setShowAddPackage: (state, action) => {
        state.showAddPackage = action.payload;
      },

      setShowAddPackageCategory: (state, action) => {
        state.showAddPackageCategory = action.payload;
      },
  },
});

export const selectShowProfile = (state) => state.appSettings.showProfile;
// Login user
export const selectShowLoginUser = (state) => state.appSettings.showLoginUser;

export const selectShowAuthenticateUser = (state) => state.appSettings.showAuthUser;

export const selectShowUser = (state) => state.appSettings.showUser;

export const selectShowProfileOne = (state) => state.appSettings.showProfileOne;

export const selectUpdateUser = (state) => state.appSettings.updateUser;

export const selectShowAddProperty = (state) => state.appSettings.showAddProperty;

export const selectShowAddPropertyCategory = (state) => state.appSettings.showAddPropertyCategory;

export const selectShowAddPropertyType = (state) => state.appSettings.showAddPropertyType;

export const selectShowAddPackage = (state) => state.appSettings.showAddPackage;

export const selectShowAddPackageCategory = (state) => state.appSettings.showAddPackageCategory;




export const {
  setShowProfile,
  setShowLoginUser,
  setShowUser,
  setShowProfileOne,
  setUpdateUser,
  setShowAuthenticateUser,
  setShowAddProperty,
  setShowAddPropertyCategory,
  setShowAddPropertyType,
  setShowAddPackage,
  setShowAddPackageCategory,
} = appSettingsSlice.actions;

export default appSettingsSlice.reducer;
