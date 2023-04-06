
import './Navigation.scss'
import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand, MDBNavbarItem, MDBNavbarNav, MDBCollapse, MDBNavbarToggler, MDBIcon, MDBBtn
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
export  const Navigation =() =>{
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand className="text-primary ms-4 me-4 fs-2 fw-bold "  href='/'>Month View</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav
            className="justify-content-end">
            <MDBNavbarItem>
              <MDBBtn className="ms-4 me-4 mt-2 mb-2" href='/new'>ADD BOOKING</MDBBtn>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBBtn className="ms-1 me-1 mt-2 mb-2"  onClick={() => navigate(-1)}>
                BACK
              </MDBBtn >
            </MDBNavbarItem>
            <MDBNavbarItem >
              <MDBBtn className="ms-1 me-1 mt-2 mb-2 " onClick={() => navigate(+1)}>NEXT</MDBBtn>
            </MDBNavbarItem>


          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}