import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const Admin = '/admin';

const _nav = [
  {
    component: CNavItem,
    name: 'Trang chủ',
    to: Admin + '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    /*badge: {
      color: 'info',
      text: 'NEW',
    },*/
  },
  {
    component: CNavTitle,
    name: 'Tài chính',
  },
  {
    component: CNavGroup,
    name: 'Khách hàng',
    to: Admin + '/borrower',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Danh sách',
        to: Admin + '/borrower',
      },
      {
        component: CNavItem,
        name: 'Thêm khách hàng mới',
        to: Admin + '/borrower/create',
      },
    ],
  },
]

export default _nav
