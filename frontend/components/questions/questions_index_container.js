import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import QuestionsIndex from './questions_index';

const mapStateToProps = state => ({
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: (userId) => dispatch(fetchQuestions(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex)