import { connect } from 'react-redux';
import { fetchQuestions, createQuestion } from '../../actions/question_actions';
import {fetchAnswers, createAnswer} from '../../actions/answer_actions';
import Form from './form';

const mapStateToProps = state => ({
  currentUser: state.session.id,
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: (userId) => dispatch(fetchQuestions(userId)), 
  createQuestion: question => dispatch(createQuestion(question)),
  fetchAnswers: (userId, questionId) => dispatch(fetchAnswers(userId, questionId)),
  createAnswer: answer => dispatch(createAnswer(answer))

});

export default connect(mapStateToProps, mapDispatchToProps)(Form)