import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchQuestions(parseInt(this.props.match.params.userId, 10))
  // };

  render() {
    console.log(Object.values(this.props.questions))
    return (
      <div>
       create new question form
      </div>
    )
  }
};

export default withRouter(Form)