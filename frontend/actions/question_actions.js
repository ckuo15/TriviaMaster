import * as QuestionAPIUtil from '../utils/question_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

export const fetchQuestions = (userId) => dispatch => (
  QuestionAPIUtil.fetchQuestions(userId).then(questions => (dispatch(receiveQuestions(questions))))
);

export const createQuestion = question => dispatch => (
  QuestionAPIUtil.createQuestion(question).then(question => dispatch(receiveQuestion(question)))
);