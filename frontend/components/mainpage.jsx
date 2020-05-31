import React from 'react';
import NavBar from './navbar/navbar_container';
import Categories from '../components/categories/categories_index_container';

const Mainpage = () => {
  return (
    <div className='mainpage-container'>
      <NavBar/>
      <Categories/>
    </div>
  )
};

export default Mainpage;