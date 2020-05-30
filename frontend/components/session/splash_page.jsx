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
        <SignupForm location={this.props.location} />
      </div>
    )
  }
};

export default Splash;