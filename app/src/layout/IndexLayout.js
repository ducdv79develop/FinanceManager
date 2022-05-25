import React from 'react'

const Index = React.lazy(() => import('../views/index/Index'))

const IndexLayout = () => {
    return (
        <div>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <div className="body flex-grow-1 px-3">
                    <Index />
                </div>
            </div>
        </div>
    )
}

export default IndexLayout
