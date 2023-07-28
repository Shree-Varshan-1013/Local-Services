import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
  accessToken: null,
  userDetails: null,
  providerEmail: null,
  providerDetails: null,
  color: null,
  services: [],
  cart: [],
};

const masterSlice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addToken: (state, action) => {
      state.accessToken = action.payload;
    },
    addColor: (state, action) => {
      state.color = action.payload;
    },
    deleteColor: (state, action) => {
      state.color = null;
    },
    addProviderEmail: (state, action) => {
      state.providerEmail = action.payload;
    },
    deleteProviderEmail: (state, action) => {
      state.providerEmail = null;
    },
    addRole: (state, action) => {
      state.role = action.payload;
    },
    deleteRole: (state, action) => {
      state.role = null;
    },
    addProviderDetails: (state, action) => {
      state.providerDetails = action.payload;
    },
    deleteProviderDetails: (state, action) => {
      state.providerDetails = null;
    },
    deleteToken: (state, action) => {
      state.accessToken = null;
    },
    deleteUser: (state, action) => {
      state.user = null;
    },
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    deleteUserDetails: (state, action) => {
      state.userDetails = null;
    },
    addServices:(state, action) => {
      state.cart.push(action.payload);
    },
    EmptyServices:(state, action) => {
      state.cart = [];
    },
    deleteServices:(state, action) => {
      state.cart = state.cart.filter(ele => ele.id !== action.payload.id);
    },
  },
});

export const {
  addUser,
  addRole,
  deleteRole,
  addProviderDetails,
  deleteProviderDetails,
  addProviderEmail,
  deleteProviderEmail,
  addToken,
  addColor,
  deleteColor,
  addUserDetails,
  deleteUser,
  deleteUserDetails,
  deleteToken,
  addServices,
  EmptyServices,
  deleteServices
} = masterSlice.actions;

export default masterSlice.reducer;
