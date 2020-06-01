import { connect } from 'react-redux';
import CategoriesItem from './categories_item';

const mapStateToProps = (state) => {

};

const mapDispatchToProps = dispatch => {
  //fetch all questions under that category
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesItem);