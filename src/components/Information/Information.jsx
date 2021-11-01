import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Card } from 'react-bootstrap'

const Information = () => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const handelChange = (event) => {
    if(event) event.preventDefault()
    if((event.target.value).trim() !== ""){
      setValue((event.target.value).trim())
    }
  }
  const handelSubmit = (event) => {
    if(event) event.preventDefault()
    localStorage.setItem("name", JSON.stringify(value))
    history.push("/survey");
  } 
  
  return (
    <Card style={{ width: '20rem', margin: '50px auto' }}>
    <Card.Body>
    <Form onSubmit={handelSubmit}>
    <Form.Label>Please Enter Your Name</Form.Label>
    <Form.Group className="mb-3">
      <Form.Control onChange={handelChange} type="text"/>
    </Form.Group>
    <Form.Group className="d-flex justify-contet mb-3">
      <Form.Control className="btn-primary" type="submit" value="Start"/>
    </Form.Group>
  </Form>
    </Card.Body>
  </Card>
)
}

export default Information