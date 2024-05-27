import { App } from '@/components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Shop } from '@/pages/shop';
import { Suspense } from 'react';
import {UserCard} from '@packages/shared/src/components/UserCard'

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
      },
      {
        path: '/shop/second',
        element: <Suspense fallback={'Loading...'}>
          <div style={{color: 'red'}}>
            <h1>Second page</h1>
            <UserCard username={'FROM SHOP'}/>
          </div>
        </Suspense>
      }
    ]
  },
]

export const router = createBrowserRouter(routes);

export default routes;