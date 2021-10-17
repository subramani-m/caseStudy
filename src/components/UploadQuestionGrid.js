
import React, { useState } from 'react'
import { Col, Container, Form, Row} from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import UploadQuestion from './UploadQuestion'

function UploadQuestionGrid() {

  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

          return (
 <>
<Container>
<UploadQuestion/>
<Form noValidate validated={validated} onSubmit={handleSubmit}>

<Row xs={1} sm={2} md={4} lg={4}>

<Col >
<FloatingLabel  controlId="floatingInput validationCustom03"  label="Candidate Name"  className="mb-3"  size ="md"  >
<Form.Control type="text" placeholder=" hi"  required/>
<Form.Control.Feedback type="invalid"> Please provide a Name.</Form.Control.Feedback>
  </FloatingLabel>
  </Col>

    <Col>
    <FloatingLabel controlId="floatingSelect validationCustom04" label="Department" className="mb-3 ">
  <Form.Select aria-label="Floating label select example"  required >
    <option> select...</option>
    <option value="1">HR</option>
    <option value="2">IT</option>
    <option value="3">ACCOUNTS</option>

    <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
          </Form.Select>
</FloatingLabel>
</Col>

<Col  ><FloatingLabel  controlId="floatingInput"  label="Client Name"  className="mb-3"  size ="md"  >
<Form.Control type="text" placeholder=" hi"  required/>
<Form.Control.Feedback type="invalid">
            Please provide a Name.
          </Form.Control.Feedback>

  </FloatingLabel></Col>

   <Col>
    
    <FloatingLabel controlId="floatingSelect" label="Technology" className="mb-3">
  <Form.Select aria-label="Floating label select example" required >
    <option> select...</option>
    <option value="1">React.js</option>
    <option value="2">vue.js</option>
    <option value="3">Angular</option>
    <option value="3">Python</option>
    <option value="3">next.js</option>


  </Form.Select>
</FloatingLabel>

</Col>
</Row>

  <Row  >
  <Col lg={9}     >
  <FloatingLabel    controlId="floatingTextarea" label="Question" className="mb-3">
    <Form.Control as="textarea" placeholder="x"  required/>
    <Form.Control.Feedback type="invalid">
            Please provide a Question.
          </Form.Control.Feedback>
  </FloatingLabel>
  </Col>


  <Col lg={3}  md={{ order: 'first' }}  xs={{order: 'first'}} lg={{order:'last'}}   >

  <FloatingLabel controlId="floatingSelect" label="Difficulty level" className="mb-3">
  <Form.Select aria-label="Floating label select example">
    <option> select...</option>
    <option value="1">Easy</option>
    <option value="2">Intermediate</option>
    <option value="3">Expert</option>
  </Form.Select>
</FloatingLabel>
  </Col>
  </Row>

<Row>
      <Col lg={9} > 
      <FloatingLabel className="mb-3 " controlId="floatingTextarea" label="Answer">
    <Form.Control
      as="textarea"
      placeholder=" x"
      style={{ height: '100px' }}
      required
    />
       <Form.Control.Feedback type="invalid">
            Please provide a Answer.
          </Form.Control.Feedback>
  </FloatingLabel>
   </Col>
   <Col lg={3}     >
   {/* <Button variant="warning"  style={{ color: 'white' }} ><i class="fas fa-plus-circle"></i> Add New </Button> */}
   <button  className="btn "   id="button1" ><i className="fa fa-plus-circle"></i> Add New</button>
   </Col>
    </Row>

    <br />
    <br />
    <br />
    

    </Form>
</Container>
    
<br/>

      
                    </>
          )
}

export default UploadQuestionGrid
