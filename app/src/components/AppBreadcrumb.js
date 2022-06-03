import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import routes from '../routes';

import {CBreadcrumb} from '@coreui/react';

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="m-0 ms-2">
      <li className="breadcrumb-item active">
        <NavLink to="/admin">Trang chủ</NavLink>
      </li>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
            <li className="breadcrumb-item" key={index}>
              {!breadcrumb.active ? <NavLink to={breadcrumb.pathname}>{breadcrumb.name}</NavLink> : <span>{breadcrumb.name}</span>}
            </li>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
