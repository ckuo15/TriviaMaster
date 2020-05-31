import React from 'react';
import { Link } from 'react-router-dom';

class CategoriesItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    // console.log(this.props)
    return(
      <div>
        {this.props.categoryName}
      </div>
    )
  }
};

export default CategoriesItem;