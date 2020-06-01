import * as AnswerAPIUtil from '../utils/answer_api_util';

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

const receiveAnswers = answers => ({
  type: RECEIVE_ANSWERS,
  answers
});

const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

export const fetchAnswers = () => dispatch => (
  AnswerAPIUtil.fetchAnswers().then(answers => dispatch(receiveAnswers(answers)))
);

export const createAnswer = answer => dispatch => (
  AnswerAPIUtil.createAnswer(answer).then(answer => dispatch(receiveAnswer(answer)))
);