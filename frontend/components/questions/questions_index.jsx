import React from 'react';
import {Link, withRouter } from 'react-router-dom';

class QuestionIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchQuestions(this.props.match.params.userId)
  };

  render(){
    console.log(this.props)
    return(
      <div>
        Questions
      </div>
    )
  }
};

export default withRouter(QuestionIndex)