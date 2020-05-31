import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CategoriesItem from './categories_item';
class CategoryIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchCategories()
  };

  render(){
    // console.log(this.props)
    return(
      <div>
        <ul>
          {Object.values(this.props.categories).map(category => <CategoriesItem key={category.id} categoryName={category.name}/>)}
        </ul>
      </div>
    )
  }
};

export default withRouter(CategoryIndex)