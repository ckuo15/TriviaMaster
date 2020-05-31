import * as QuestionAPIUtil from '../utils/question_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const fetchQuestions = () => dispatch => (
  QuestionAPIUtil.fetchQuestions().then(questions => (dispatch(receiveQuestions(questions))))
);