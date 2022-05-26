import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilUser,
    cilMoney,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
    {
        component: CNavItem,
        name: 'Trang chủ',
        to: '/dashboard',
    },
    {
        component: CNavTitle,
        name: 'Tài chính',
    },
    {
        component: CNavGroup,
        name: 'Khách vay',
        to: '/borrower',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Dánh sách',
                to: '/borrower',
            },
            {
                component: CNavItem,
                name: 'Thêm khách mới',
                to: '/borrower/create',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Giao dịch',
        to: '/transaction',
        icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Dánh sách',
                to: '/transaction',
            },
            {
                component: CNavItem,
                name: 'Thêm giao dịch mới',
                to: '/transaction/create',
            },
        ],
    },
]

export default _nav
