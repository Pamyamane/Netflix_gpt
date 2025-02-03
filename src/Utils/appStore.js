import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../Utils/UserSlice";

const appStore = configureStore({
  reducer: {
    user:userReducer
  },
});

export default appStore;
