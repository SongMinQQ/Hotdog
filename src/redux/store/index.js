import { configureStore } from "@reduxjs/toolkit";
import like from "../slices/likeSlice";
import switchSlice from "../slices/switchSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["like", "toggle"],
};

const reducer = combineReducers({
  like: like.reducer,
  switchSlice: switchSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,

  //* action 직렬화 값 전달을 위한 미들웨어 설정
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
