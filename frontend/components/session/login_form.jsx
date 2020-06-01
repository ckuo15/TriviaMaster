import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemonUser = this.loginDemonUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  };

  loginDemonUser(e) {
    e.preventDefault();
    const user = {
      username: 'user1',
      password: 'hunter12'
    }
    this.props.processForm(user);
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  };

  renderErrors() {
    return (
      <ul className='errors'>
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
      <div className='splash-container'>
        <div className='signup-container'>
          <img src={window.logoURL} className='l-logo' />
          <form onSubmit={this.handleSubmit} className='login-box'>
            <p className='login-errors'>{this.renderErrors()}</p>
            <div className='login-form'>
              <p>Username:</p>
              <TextField id='standard-basic' autoComplete='off' type='text' value={this.state.username} onChange={this.update('username')}/>
              <p>Password:</p>
              <TextField id='standard-basic' autoComplete='off' type='password' value={this.state.password} onChange={this.update('password')}/>
            </div>
            <Button variant='contained' color='primary'type='submit'>Log In</Button>
            <Button variant='contained' color='primary' className='demo-login-button-login' onClick={this.loginDemonUser}>Demo Login</Button>
            <p className='ask-account'>Don't have an account? <span className='login'><Link onClick={this.props.clearErrors} to='/'>Sign Up</Link></span></p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;