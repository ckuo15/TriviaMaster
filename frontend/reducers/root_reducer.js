import {combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import usersReducer from './users_reducer';
import categoriesReducer from './categories_reducer';
import questionsReducer from './questions_reducer';
import answersReducer from './answers.reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  users: usersReducer,
  entities: entitiesReducer,
  categories: categoriesReducer,
  questions: questionsReducer,
  answers: answersReducer
});

export default rootReducer;