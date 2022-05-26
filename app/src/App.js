import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

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
    render() {
        return (
        <HashRouter>
            <Suspense fallback={loading}>
                <Routes>
                    <Route exact="/" name="Index" element={<Index />} />
                    <Route exact path="admin/login" name="Admin Login" element={<Login />} />
                    <Route exact path="admin/*" name="Admin Manager" element={<AdminLayout />} />
                    <Route exact path="/404" name="Page 404" element={<Page404 />} />
                    <Route exact path="/500" name="Page 500" element={<Page500 />} />
                </Routes>
            </Suspense>
        </HashRouter>
        )
    }
}

export default App
