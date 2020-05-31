import { RECEIVE_QUESTIONS, RECEIVE_QUESTION } from '../actions/question_actions';

const questionsReducer = (state ={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_QUESTIONS:
      return action.questions 
    case RECEIVE_QUESTION:
      return Object.assign({}, state, {[action.question.id]: action.question})
    default:
      return state;
  }
};

export default questionsReducer;