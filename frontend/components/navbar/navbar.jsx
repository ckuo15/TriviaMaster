import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm();
  }

  render(){
    return (
      <div>
        <img src={navbarLogo}/>
        <button onClick={this.handleSubmit}>Log out</button>
        <Link to={`/users/${this.props.currentUser}/questions`}>
          show all questions
        </Link>
        <Link to="/create">
          create new question
        </Link>
      </div>
    )
  }
};

export default withRouter(NavBar);