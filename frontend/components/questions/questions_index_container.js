import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchAnswers } from '../../actions/answer_actions';
import QuestionsIndex from './questions_index';

const mapStateToProps = state => ({
  questions: state.questions,
  currentUser: state.session.id,

});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: (userId) => dispatch(fetchQuestions(userId)),
  fetchAnswers: () => dispatch(fetchAnswers()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex)