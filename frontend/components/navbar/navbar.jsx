import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';


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
      <div className='navbar-container'>
        <Link to="/">
          <img src={navbarLogo} className='nav-logo'/>
        </Link>
        <div className='nav-right'>
          <Link to={`/users/${this.props.currentUser}/questions`}>
            <span className='view-questions'>View My Questions</span>
          </Link>
          <Link to="/create">
            <span className='create-question'>Create New Question</span>
          </Link>
          <Button variant='contained' color='primary' onClick={this.handleSubmit}>Log out</Button>
        </div>
      </div>
    )
  }
};

export default withRouter(NavBar);