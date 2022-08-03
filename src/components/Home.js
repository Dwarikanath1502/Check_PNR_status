import React, { useState, useContext } from 'react'
import { Container, Card, CardTitle, ListGroupItem, ListGroup, Button, Input, InputGroup, List } from 'reactstrap'
import { PnrContext } from '../context/Context'
import Axios from 'axios'

const Home = () => {

  const [data, setData] = useState({})

  const context = useContext(PnrContext)
  const url = `https://pnr-status-indian-railway.p.rapidapi.com/rail/${context.pnr}`

  const fetchData =  () => {
    if (context.pnr === '') {
      return alert("Enter your PNR!")
    } else {
       Axios.get(url, {
        headers: {
          'X-RapidAPI-Key': 'c7f77319b7mshbf31f81334ba8c6p172803jsn8c0911e4683a',
          'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'
        }
      })
        .then(res => {
          setData(res.data)
          console.log("Response: ", res.data)
        })
        .catch(err => console.log(err))
    }
    setData('')
  }

  return (
    <Container>
      <InputGroup className='mt-5'>
        <Input
          placeholder='Enter your PNR here'
          type="number"
          value={context.pnr}
          onChange={e => context.setPnr(e.target.value)}
          onInput={(e) => {
            if (e.target.value.length > e.target.maxLength)
              e.target.value = e.target.value.slice(0, e.target.maxLength);
          }}
          maxLength={10}
        />
        <Button
          color="primary"
          className='mx-3 py-1 px-4'
          style={{ borderRadius: '8px' }}
          onClick={fetchData}
        >
          Search
        </Button >
      </InputGroup>

      <Card body className='mt-5  mx-auto ' style={{ width: 'auto' }}>
        <CardTitle tag="h5" className='text-center'>
          {context.pnr ? <p>Your PNR no. : {context.pnr}</p> : "Check your journey status"}
          <hr />
        </CardTitle>
        {/*  */}

        <ListGroup>
          <ListGroupItem>
            Charting : <span style={{fontWeight: 'bold'}}>{data.chart_status}</span>
          </ListGroupItem>
          <ListGroupItem>
            Status : 
           <List>
           passenger 1: <List style={{fontWeight: 'bold'}}>Booking Status: {data.passenger[0].booking_status}</List>
                        <List style={{fontWeight: 'bold'}}>Current status: {data.passenger[0].booking_status}</List>
           </List>
           <List>
           passenger 2: <List style={{fontWeight: 'bold'}}>Booking Status: {data.passenger[1].booking_status}</List>
                        <List style={{fontWeight: 'bold'}}>Current status: {data.passenger[1].booking_status}</List>
           </List>
          </ListGroupItem>
          {/* <ListGroupItem>
            Train no. : <span style={{fontWeight: 'bold'}}></span>
          </ListGroupItem> */}
          <ListGroupItem>
            Train  : <span style={{fontWeight: 'bold'}}>{data.train_name}</span>
          </ListGroupItem>
          <ListGroupItem>
            Arrival date : <span style={{fontWeight: 'bold'}}> {data.arrival_data?.arrival_date}</span>
          </ListGroupItem>
          <ListGroupItem>
            Boarding Station : <span style={{fontWeight: 'bold'}}>{data.boarding_station}</span>
          </ListGroupItem>
          <ListGroupItem>
            Reserved upto : <span style={{fontWeight: 'bold'}}>{data.reservation_upto}</span>
          </ListGroupItem>
          <ListGroupItem>
            Class : <span style={{fontWeight: 'bold'}}>{data.class}</span>
          </ListGroupItem>
        </ListGroup>

      </Card>
    </Container>
  )
}

export default Home

