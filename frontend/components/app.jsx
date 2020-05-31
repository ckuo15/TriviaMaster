import React from "react";
import LogInFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import Splash from './session/splash_page';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Mainpage from './mainpage';
import QuestionsIndexContainer from './questions/questions_index_container';

const App = (props) => {
  let renderedComponent;
  if (props.currentUser) {
    renderedComponent = Mainpage;
  } else {
    renderedComponent = Splash;
  };

  return (
    <div>
      <Route exact path='/' component={renderedComponent} /> 
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/login' component={LogInFormContainer} />
      <Route path='/user/:userId/questions' component={QuestionsIndexContainer} /> 
    </div>
  )
}

export default App;