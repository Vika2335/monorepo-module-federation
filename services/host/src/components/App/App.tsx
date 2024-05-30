import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { adminRoutes } from '@packages/shared/src/routes/admin'
import { shopRoutes } from '@packages/shared/src/routes/shop'
import '../../../../shop/src/styles/main.scss'
import '../../../../admin/src/styles/main.scss'
import './App.module.scss'

export const App = () => {

  return (
    <div className="page" data-testid={'App.DataTestId'}>
      <h1>PAGE</h1>
      <p className='title'>
        Title
      </p>
      <Link className="link" to={adminRoutes.about}>ABOUT</Link>
      <br/>
      <Link className="link" to={shopRoutes.main}>SHOP</Link>
      <Outlet />
    </div>
  )   
};
