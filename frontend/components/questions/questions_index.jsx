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
    const categoryName ={
      1: "Music",
      2: "Animal",
      3: "Biology",
      4: "History",
      5: "World",
      6: "Other"
    };

    return(
      <div className='questions-index-container'>
        <NavBar/>
        <div className='q-index-item-container'>
          <p className='qi-title'>All Questions</p>
          <div className='questions-index'>
            <ul className='cateogory-names-container'>
              {Object.values(this.props.questions).map(question => 
                <div className='q-question-item'>
                  <li className="category-name-item" key={question.category_id}>{question.body}</li>
                  <p className="q-category-item">Category: {categoryName[question.category_id]}</p>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default withRouter(QuestionIndex)