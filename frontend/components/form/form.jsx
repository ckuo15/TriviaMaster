import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      question: '',
      responses: [],
      category:''
    }
    this.handleCategory = this.handleCategory.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchQuestions(parseInt(this.props.match.params.userId, 10))
  // };

  handleCategory(e){
    this.setState({
      category: e.target.value
    });
  }

  render() {
    console.log(Object.values(this.props.questions))
    return (
      <div>
        <p>create new question form</p>
        <div>
          <form onSubmit={this.handleSubmit}>
              <p>Question:</p>
              {/* <input type='text' value={this.state.question} onChange={this.handleQuestion}/> */}
              <p>Responses:</p>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <p>Category</p>
              <div onChange={this.handleCategory}>
                <input type='radio' name='category' id='music' value='music'/>
                <label htmlFor='music'>Music
                </label>
                <input type='radio' name='category' id='animal' value='animal' />
                <label htmlFor='animal'>Animal
                </label>
                  <input type='radio' name='category' id='biology' value='biology'  />
                <label htmlFor='biology'>Biology
                </label>
                  <input type='radio' name='category' id='history' value='history'/>
                <label htmlFor='history'>History
                </label>
                  <input type='radio' name='category' id='world' value='world' />
                <label htmlFor='world'>World
                </label>
                  <input type='radio' name='category' id='other' value='other' />
                <label htmlFor='other'>Other
                </label>
              </div>
          </form>
        </div>
      </div>
    )
  }
};

export default withRouter(Form)