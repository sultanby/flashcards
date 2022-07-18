import { configureStore } from "@reduxjs/toolkit";
import topics from '../features/topics/TopicsSlice'; //7
import quizzes from '../features/quizzes/QuizzesSlice';
import cards from '../features/cards/CardsSlice';

export default configureStore({
  reducer: {
    topics: topics,
    quizzes: quizzes,
    cards: cards
  },
});
