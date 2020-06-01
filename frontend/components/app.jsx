import React from "react";
import LogInFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import Splash from './session/splash_page';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Mainpage from './mainpage';
import QuestionsIndexContainer from './questions/questions_index_container';
import FormContainer from './form/form_container';
import CategoryItemShow from './categories/item_show';

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
      <Route path='/users/:userId/questions' component={QuestionsIndexContainer} />
      {/* <Route path='/categories/:categoryId' component={CategoriesItem}/> */}
      <Route path='/create' component={FormContainer} />
      <Route path='/categories/:categoryId' component={CategoryItemShow}/>
    </div>
  )
}

export default App;