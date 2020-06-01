import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import NavBar from '../navbar/navbar_container';

class QuestionIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchQuestions(parseInt(this.props.match.params.userId, 10))
  };

  render(){
    console.log(Object.values(this.props.questions))
    return(
      <div>
        <NavBar/>
        <ul>
          <li>
            {Object.values(this.props.questions).map(question => question.body)}
          </li>
        </ul>
      </div>
    )
  }
};

export default withRouter(QuestionIndex)