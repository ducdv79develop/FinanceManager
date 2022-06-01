import React from 'react';
import CIcon from '@coreui/icons-react';
import {
    cilUser,
    cilMoney, cilSpeedometer,
} from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';

// Prefix admin
const PREFIX_ADMIN = '/admin'

const _nav = [
    {
        component: CNavItem,
        name: 'Trang chủ',
        to: PREFIX_ADMIN + '/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    {
        component: CNavTitle,
        name: 'Tài chính',
    },
    {
        component: CNavGroup,
        name: 'Khách vay',
        to: PREFIX_ADMIN + '/borrower',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Dánh sách',
                to: PREFIX_ADMIN + '/borrower',
            },
            {
                component: CNavItem,
                name: 'Thêm khách mới',
                to: PREFIX_ADMIN + '/borrower/create',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Giao dịch',
        to: PREFIX_ADMIN + '/transaction',
        icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Dánh sách',
                to: PREFIX_ADMIN + '/transaction',
            },
            {
                component: CNavItem,
                name: 'Thêm giao dịch mới',
                to: PREFIX_ADMIN + '/transaction/create',
            },
        ],
    },
]

export default _nav
