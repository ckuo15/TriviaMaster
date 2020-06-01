import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {CategoriesItem} from './categories_item';
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
      <div className='categories-container'>
        <ul>
            {Object.values(this.props.categories).map(category =>
              <Link to={`/categories/${category.id}`}>
                <CategoriesItem key={category.id} categoryId={category.id} category={category.name}>{category.name}</CategoriesItem>
              </Link>
            )
            }
        </ul>
      </div>
    )
  }
};

export default withRouter(CategoryIndex)

//have a link that takes them to /category