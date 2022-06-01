import React from 'react'
import { CFooter } from '@coreui/react'

const URL = process.env.REACT_APP_URL;

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href={URL} target="_blank" rel="noopener noreferrer">HTTC</a>
        <span className="ms-1">&copy; 2022 developments</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href={URL} target="_blank" rel="noopener noreferrer">
            HTTC React Js Admin
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
