import React from 'react';
import { Link } from 'react-router-dom';

class CategoriesItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    // console.log(this.props.category)
    return(
      <div>
          <p>{this.props.category}</p>

      </div>
    )
  }
};

export default CategoriesItem;