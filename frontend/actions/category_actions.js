import * as CategoryAPIUtil from '../utils/category_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  CategoryAPIUtil.fetchCategories().then(categories => (dispatch(receiveCategories(categories))))
);