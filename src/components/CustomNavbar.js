import React, { useState } from 'react'
import { Col, Container, FormControl, Nav, Navbar } from 'react-bootstrap'
// import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";




function CustomNavbar() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  
  

  return (
    <    >
    <Navbar   expand="lg" className=""  id="Navbaralign">
      <Container fluid >

        <Navbar.Brand href="">
          <img src={require('../image/logo2.jpg').default} style={{width:"150px"}} alt="Loading" />
        </Navbar.Brand>

  

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"  >
          <Nav
           className="mx-auto  my-lg-0"
           navbarScroll
           >
          </Nav>

        <Col xs="auto" className="m-1">
      <Form.Label   htmlFor="inlineFormCustomSelect" visuallyHidden  >
        Preference
      </Form.Label>
      <Form.Select  className="d-flex" id="inlineFormCustomSelect">
        <option value="0">Technology</option>
        <option value="1">React.js</option>
        <option value="2">vue.js</option>
        <option value="3">Angular</option>
      </Form.Select>
    </Col>

    <Col xs="auto" className="m-1" id="NavLevel"  >
     
      <Form.Select className="d-flex" id="inlineFormCustomSelect">
        <option value="0">Level</option>
        <option value="1">HR</option>
        <option value="2">IT</option>
        <option value="3">ACCOUNTS</option>
      </Form.Select>
    </Col>
            <Form className="d-flex   m-1"  >
              <FormControl id="date1" label="From date"
                type="date"
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => (e.currentTarget.type = "text")}
                placeholder="From Date"
              />
            </Form>

            <Form className="d-flex  form-group datepicker m-1  wrapper">
              <FormControl id="date2"
                type="date"
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => (e.currentTarget.type = "text")}
                placeholder="To date "  />
              
            </Form>

            <Form className="d-flex  col-lg-4 m-1 "   noValidate validated={validated} onSubmit={handleSubmit}>
              <FormControl 
                type="search"
                placeholder="Search Questions"
                required
              />
            <Form.Control.Feedback type="invalid"> Please Enter what You Want Search.</Form.Control.Feedback>
              <button id="NavButton"   >Search</button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>



  )
}

export default CustomNavbar
