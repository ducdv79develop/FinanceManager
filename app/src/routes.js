import React from 'react'

const Admin = '/admin';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Borrower = React.lazy(() => import('./views/borrower/Borrower'))

const routes = [
  { path: Admin, exact: true, name: ''},
  { path: Admin + '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: Admin + '/borrower', name: 'Borrower', element: Borrower },
]

export default routes
