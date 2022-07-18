import { configureStore } from "@reduxjs/toolkit";
import topics from '../features/topics/TopicsSlice'; //7
import quizzes from '../features/quizzes/QuizzesSlice';

export default configureStore({
  reducer: {
    topics: topics,
    quizzes: quizzes
  },
});
