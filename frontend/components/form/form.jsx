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

  render() {
    console.log(Object.values(this.props.questions))
    return (
      <div>
        <p>Create New Question!</p>
        <div>
          <form onSubmit={this.handleSubmit}>
              <p>Question:</p>
              <input type='text' value={this.state.question} onChange={this.handleQuestion}/>
              <p>Choices:</p>
              <input type='text'value={this.state.response1} onChange={this.handleResponse('response1')}/>
              <input type='text' value={this.state.response2} onChange={this.handleResponse('response2')}/>
              <input type='text' value={this.state.response3} onChange={this.handleResponse('response3')}/>
              <input type='text' value={this.state.response4} onChange={this.handleResponse('response4')}/>
              <p>Category</p>
              <div onChange={this.handleCategory}>
                <input type='radio' name='category' id='music' value='music'/>
                <label htmlFor='music'>Music</label>
                <input type='radio' name='category' id='animal' value='animal' />
                <label htmlFor='animal'>Animal</label>
                <input type='radio' name='category' id='biology' value='biology'  />
                <label htmlFor='biology'>Biology</label>
                <input type='radio' name='category' id='history' value='history'/>
                <label htmlFor='history'>History</label>
                <input type='radio' name='category' id='world' value='world' />
                <label htmlFor='world'>World</label>
                <input type='radio' name='category' id='other' value='other' />
                <label htmlFor='other'>Other</label>
              </div>
          </form>
        </div>
      </div>
    )
  }
};

export default withRouter(Form)