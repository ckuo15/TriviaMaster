import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemonUser = this.loginDemonUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  loginDemonUser(e) {
    e.preventDefault();
    const user = {
      username: 'user1',
      password: 'hunter12'
    }
    this.props.processLogin(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul className='errors signup'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='signup-container'>
        <img src={window.logoURL} className='s-logo' />
        <form onSubmit={this.handleSubmit} className='signup-box'>
          <p className='sf-header'>It's trivia time! Log in or create an account below!</p>
          <p className='signup-errors'>{this.renderErrors()}</p>
          <div className='signup-form'>
            <p>Email:</p>
            <TextField id='standard-basic' type='email' value={this.state.email} onChange={this.update('email')} />
            <p>Username:</p>
            <TextField id='standard-basic' type='text' value={this.state.username} onChange={this.update('username')} />
            <p>Password:</p>
            <TextField id='standard-basic' type='password' value={this.state.password} onChange={this.update('password')}/>
          </div>
          <Button variant='contained' color='primary' type='submit' className='signup-btn'>Sign Up</Button>
          <div className='demo-signup'>
            <Button variant='contained' color='primary' className='ds-btn' onClick={this.loginDemonUser}>Demo Login</Button>
          </div>
          <p className='ask-account'>Have an account? <span className='login'><Link onClick={this.props.clearErrors} to='/login'>Log In</Link></span></p>
        </form>
      </div>
    )
  } 
}

export default SignupForm;

