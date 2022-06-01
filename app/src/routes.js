import React from 'react';

// Prefix admin
const PREFIX_ADMIN = '/admin'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Borrower
const Borrower = React.lazy(() => import('./views/borrower/Borrower'))
const BorrowerCreate = React.lazy(() => import('./views/borrower/BorrowerCreate'))

// Transaction
const Transaction = React.lazy(() => import('./views/transaction/Transaction'))
const TransactionCreate = React.lazy(() => import('./views/transaction/TransactionCreate'))

// Logout
const Logout = React.lazy(() => import('./views/auth/Logout'))

const routes = [
    { path: PREFIX_ADMIN, exact: true, name: 'Dashboard' },
    { path: PREFIX_ADMIN + '/dashboard', name: 'Dashboard', element: Dashboard },

    { path: PREFIX_ADMIN + '/borrower', name: 'Borrower', element: Borrower},
    { path: PREFIX_ADMIN + '/borrower/create', name: 'BorrowerCreate', element: BorrowerCreate},

    { path: PREFIX_ADMIN + '/transaction', name: 'Transaction', element: Transaction},
    { path: PREFIX_ADMIN + '/transaction/create', name: 'TransactionCreate', element: TransactionCreate},

    { path: PREFIX_ADMIN + '/logout', name: 'Logout', element: Logout},
]

export default routes
