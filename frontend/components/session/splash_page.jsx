import SignupForm from './signup_form_container';
import React from 'react';


class Splash extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {counter: 0}
    // this.animate = this.animate.bind(this);
  }
  render() {
    return (
      <div className='splash-container'>
        <div className='splash-images'>
          <img className='other-splash-image' src={window.othersplashURL} />
          <img className='splash-image' src={window.splashURL} />
        </div>
        <SignupForm location={this.props.location} />
      </div>
    )
  }
};

export default Splash;