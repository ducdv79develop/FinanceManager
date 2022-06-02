import React from 'react';
import { useCookies } from 'react-cookie';
import {
    Navigate,
    useLocation
} from 'react-router-dom'

export function RequireAuth({children}: { children: JSX.Element }) {
    const [cookies, setCookie] = useCookies();

    let location = useLocation();

    if (!cookies.site_token.access_token) {

        return <Navigate to="/admin/login" state={{from: location}} replace/>;
    }
    return children;
}
