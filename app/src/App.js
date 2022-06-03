import React, {Component, Suspense} from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import './scss/style.scss';
import {RequireAuth} from './middleware/AdminAuth';
import {instanceOf} from "prop-types";
import {withCookies, Cookies} from "react-cookie";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

// Top Page
const Index = React.lazy(() => import('./views/index/Index'))

// Admin Containers
const AdminLayout = React.lazy(() => import('./layout/AdminLayout'))

// Pages
const Login = React.lazy(() => import('./views/auth/Login'))
const Page404 = React.lazy(() => import('./views/page/Page404'))
const Page500 = React.lazy(() => import('./views/page/Page500'))

class App extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    render() {
        return (
            <Suspense fallback={loading}>
                <Routes>
                    <Route index path="/" name="Index" element={<Index/>}/>
                    <Route exact path="/server-error" name="Page 500" element={<Page500/>}/>
                    <Route path="*" name="Page 404" element={<Page404/>}/>
                    <Route exact path="/admin/login" name="Admin Login" element={<Login/>}/>
                    <Route path="/admin/*" element={<RequireAuth> <AdminLayout/> </RequireAuth>}/>
                </Routes>
            </Suspense>
        )
    }
}

export default withCookies(App);
