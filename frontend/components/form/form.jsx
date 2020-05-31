import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      question: '',
      response1: '',
      response2: '',
      response3: '',
      response4: '',
      category:''
    }
    this.handleCategory = this.handleCategory.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleResponse(field){
    return e => {
      this.setState({ [field]: e.currentTarget.value})
    }
  };

  handleSubmit(){
    this.props.createQuestion({
      body: this.state.question, 
      category_id: this.state.category, 
      user_id: this.props.currentUser})
  }

  render() {
    return (
      <div>
        <p>Create New Question!</p>
        <div>
          <form onSubmit={this.handleSubmit}>
              <p>Question:</p>
              <input type='text' value={this.state.question} onChange={this.handleQuestion}/>
              {/* <p>Choices:</p>
              <input type='text'value={this.state.response1} onChange={this.handleResponse('response1')}/>
              <input type='text' value={this.state.response2} onChange={this.handleResponse('response2')}/>
              <input type='text' value={this.state.response3} onChange={this.handleResponse('response3')}/>
              <input type='text' value={this.state.response4} onChange={this.handleResponse('response4')}/> */}
              <p>Category</p>
              <div onChange={this.handleCategory}>
                <input type='radio' name='category' id='music' value='1'/>
                <label htmlFor='music'>Music</label>
                <input type='radio' name='category' id='animal' value='2' />
                <label htmlFor='animal'>Animal</label>
                <input type='radio' name='category' id='biology' value='3'  />
                <label htmlFor='biology'>Biology</label>
                <input type='radio' name='category' id='history' value='4'/>
                <label htmlFor='history'>History</label>
                <input type='radio' name='category' id='world' value='5' />
                <label htmlFor='world'>World</label>
                <input type='radio' name='category' id='other' value='6' />
                <label htmlFor='other'>Other</label>
              </div>
              <button type='submit'>Add question</button>
          </form>
        </div>
      </div>
    )
  }
};

export default withRouter(Form)