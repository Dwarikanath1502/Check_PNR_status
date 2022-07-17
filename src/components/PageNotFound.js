import React from 'react'
import { Card, CardTitle, CardText, Container } from 'reactstrap'

const PageNotFound = () => {
  return (
   <Container >
     <Card body className='mt-5 text-center mx-auto ' style={{ width: '500px'  }}>
      <CardTitle tag="h5">
        Page Not Found
      </CardTitle>
      <CardText>
        PAge you are looking for is not found. please check the URL you entered...
      </CardText>
    </Card>
   </Container>
  )
}

export default PageNotFound