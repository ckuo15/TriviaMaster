import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../navbar/navbar_container';
import { Button, TextField } from '@material-ui/core';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      question: '',
      response: '',
      category:''
    }
    this.handleCategory = this.handleCategory.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  componentDidMount(){
    this.props.fetchQuestions(this.props.currentUser)
  }

  handleCategory(e){
    this.setState({
      category: e.target.value
    });
  }

  handleQuestion(e){
    this.setState({
      question: e.target.value
    })
  }

  handleResponse(e){
    this.setState({
      response: e.target.value
    })
  };

  handleAnswer(){
    this.props.createAnswer({
      body: this.state.response,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createQuestion({
      body: this.state.question, 
      category_id: this.state.category, 
      user_id: this.props.currentUser
    }).then(() => {
      this.props.createAnswer({
        body: this.state.response,
        question_id: (Object.keys(this.props.questions).length)
      })
    }).then(() => {
      this.setState({question:'', response:'', category:''})
    })
  }

  // parseInt(Object.keys(this.props.questions)[0])
  render() {
    return (
      <div className='question-page-container'>
        <NavBar/>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit} className='question-form'>
              <p className='form-title'>Create New Question!</p>
              <p>Question:</p>
              <TextField id="outlined-basic" autoComplete='off'type='text' fullWidth value={this.state.question} onChange={this.handleQuestion}/>
              <p>Answer:</p>
              <TextField id='outlined-basic' autoComplete='off' fullWidth type='text'value={this.state.response} onChange={this.handleResponse}/>
              <p>Pick a Category:</p>
              <div onChange={this.handleCategory} className='form-category'>
                <input type='radio' name='category' id='music' value='1' checked={this.state.category === "1"}/>
                <label htmlFor='music'>Music</label>
              <input type='radio' name='category' id='animal' value='2' checked={this.state.category === "2"} />
                <label htmlFor='animal'>Animal</label>
              <input type='radio' name='category' id='biology' value='3' checked={this.state.category === "3"} />
                <label htmlFor='biology'>Biology</label>
              <input type='radio' name='category' id='history' value='4' checked={this.state.category === "4"}/>
                <label htmlFor='history'>History</label>
              <input type='radio' name='category' id='world' value='5' checked={this.state.category === "5"} />
                <label htmlFor='world'>World</label>
              <input type='radio' name='category' id='other' value='6' checked={this.state.category === "6"}/>
                <label htmlFor='other'>Other</label>
              </div>
              <Button variant="contained" color="secondary" type='submit'>Add question</Button>
          </form>
        </div>
      </div>
    )
  }
};

export default withRouter(Form)