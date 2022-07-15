import { configureStore } from "@reduxjs/toolkit";
import TopicsReducer from '../features/topics/TopicsSlice'; //7

export default configureStore({
  reducer: {
    topics: TopicsReducer,
  },
});
