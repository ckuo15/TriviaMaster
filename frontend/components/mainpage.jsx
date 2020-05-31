import React from 'react';
import NavBar from './navbar/navbar_container';
import Categories from '../components/categories/categories_index_container';
import Questions from '../components/questions/questions_index_container';

const Mainpage = () => {
  return (
    <div className='mainpage-container'>
      <NavBar/>
      <Categories/>
      <Questions/>
    </div>
  )
};

export default Mainpage;