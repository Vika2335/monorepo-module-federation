import React from 'react';
import { shopRoutes } from '@packages/shared/src/routes/shop'
import { Link } from 'react-router-dom';

export const Shop = () => {
  return (
    <h1>
      SHOP
      <Link to={shopRoutes.second}>Go to second page</Link>
    </h1>
  )   
};

export default Shop;