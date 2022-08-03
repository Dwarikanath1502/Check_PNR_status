import React from 'react'
import { Card,  CardText, CardTitle, Col,  Row, } from 'reactstrap'


const About = () => {
  return (

    <Row className='d-flex justify-content-center  mt-4'>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">
            About this App
          </CardTitle>
          <CardText>
            This project is developed under a project by Dwarikanath.
          </CardText>
          <hr/>
          <strong>
            Who is Dwarikanath ?
          </strong>
          <CardText>Dwarikanath is student of Computer Science and Engineering, he loves and passonate about coding.
            <hr/>
          <p>Reach out at email: learn.dwarikanath15@gmail.com</p>
          </CardText>
        </Card>
      </Col>
    </Row>

  )
}

export default About