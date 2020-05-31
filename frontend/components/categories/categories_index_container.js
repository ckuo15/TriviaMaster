import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category_actions';
import CategoriesIndex from './categories_index';

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesIndex);