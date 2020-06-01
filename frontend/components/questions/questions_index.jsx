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
      <div className='questions-index-container'>
        <NavBar/>
        <div className='q-index-item-container'>
          <p className='qi-title'>All Questions</p>
          <div className='questions-index'>
            <ul className='cateogory-names-container'>
              {Object.values(this.props.questions).map(question => 
              <li className="category-name-item">{question.body}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default withRouter(QuestionIndex)