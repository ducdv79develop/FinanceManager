import React from 'react'
import {
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'

const Page500 = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <span className="clearfix">
              <h1 className="float-start display-3 me-4">500</h1>
              <h4 className="pt-3">Oops! Lỗi máy chủ.</h4>
              <p className="text-medium-emphasis float-start">
                Vui lòng thử lại hoặc liên hệ dev hotrotaichinh.
              </p>
            </span>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page500
