import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const IndexLayout = React.lazy(() => import('./layout/IndexLayout'))
const AdminLayout = React.lazy(() => import('./layout/AdminLayout'))
const Login = React.lazy(() => import('./views/auth/Login'))

// Pages

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" name="Index" element={<IndexLayout />} />
            <Route path="/login" name="Login" element={<Login />} />
            <Route path="/admin/*" name="Admin" element={<AdminLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
