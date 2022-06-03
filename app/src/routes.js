import React from 'react';

// Prefix admin
const PREFIX_ADMIN = '/admin';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

// Borrower
const Borrower = React.lazy(() => import('./views/borrower/Borrower'));
const BorrowerCreate = React.lazy(() => import('./views/borrower/BorrowerCreate'));

// Transaction
const Transaction = React.lazy(() => import('./views/transaction/Transaction'));
const TransactionCreate = React.lazy(() => import('./views/transaction/TransactionCreate'));



const routes = [
    { path: PREFIX_ADMIN + '/dashboard', exact: true, name: 'Dashboard', element: Dashboard },

    { path: PREFIX_ADMIN + '/borrower', exact: true, name: 'Borrower', element: Borrower},
    { path: PREFIX_ADMIN + '/borrower/create', exact: true, name: 'BorrowerCreate', element: BorrowerCreate},

    { path: PREFIX_ADMIN + '/transaction', exact: true, name: 'Transaction', element: Transaction},
    { path: PREFIX_ADMIN + '/transaction/create', exact: true, name: 'TransactionCreate', element: TransactionCreate},
]

export default routes
