import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz(state, action) {
      const {id, name, topicId, cardIds} = action.payload;
      state.quizzes[id] = {
          id: id,
          name: name,
          topicId: topicId,
          cardIds: cardIds
      }; 
    },
    
  }
});

export const selectQuizzes = state => state.topics.topics;
export const {addQuiz} = topicsSlice.actions;
export default quizzesSlice.reducer;
