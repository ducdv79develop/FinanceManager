import React from 'react';
import { useCookies } from 'react-cookie';
import {
    Navigate,
    useLocation
} from 'react-router-dom'

export function RequireAuth({children}: { children: JSX.Element }) {
    const [cookies, setCookie] = useCookies();

    let location = useLocation();
    console.log(cookies)

    if (!cookies.site_token) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/admin/login" state={{from: location}} replace/>;
    }
    return children;
}
