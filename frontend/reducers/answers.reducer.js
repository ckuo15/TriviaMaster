import { RECEIVE_ANSWERS, RECEIVE_ANSWER } from '../actions/answer_actions';

const answerReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ANSWERS:
      return action.answers
    case RECEIVE_ANSWER:
      return Object.assign({}, state, {[action.answer.id]: action.answer})
    default:
      return state;
  }
};

export default answerReducer;