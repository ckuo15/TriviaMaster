import { connect } from 'react-redux';
import { fetchQuestions, createQuestion } from '../../actions/question_actions';
import Form from './form';

const mapStateToProps = state => ({
  currentUser: state.session.id,
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: (userId) => dispatch(fetchQuestions(userId)), 
  createQuestion: question => dispatch(createQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form)