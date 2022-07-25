import React, {useState ,useContext } from 'react'
import { Container, Card, CardTitle, ListGroupItem, ListGroup, Button, Input, InputGroup } from 'reactstrap'
import { PnrContext } from '../context/Context'
import Axios from 'axios'

const Home = () => {

const [details, setDetails] = useState({})

  const context = useContext(PnrContext)
  const url = `https://pnr-status-indian-railway.p.rapidapi.com/rail/${context.pnr}`
  const errorMessage = async () => {
    if (context.pnr === '') {
      return alert("Enter your PNR!")
    } else {
      await Axios.get(url, {
        headers: {
          'X-RapidAPI-Key': 'c7f77319b7mshbf31f81334ba8c6p172803jsn8c0911e4683a',
          'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'
        }
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
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
          onClick={errorMessage}
        >
          Search
        </Button >
      </InputGroup>
      {/*TODO: import Result page here */}
      <Card body className='mt-5  mx-auto ' style={{ width: 'auto' }}>
        <CardTitle tag="h5" className='text-center'>
          {context.pnr ? <p>Your PNR no. : {context.pnr}</p> : "Check your journey status"}
          <hr />
        </CardTitle>
        {/*  */}
        <ListGroup>
          <ListGroupItem>
            Charting : Done
          </ListGroupItem>
          <ListGroupItem>
            Status : Confirmed
          </ListGroupItem>
          <ListGroupItem>
            Train no. : 19602
          </ListGroupItem>
          <ListGroupItem>
            Train  : LTT Express
          </ListGroupItem>
          <ListGroupItem>
            Arrival date : 19-60-2022
          </ListGroupItem>
          <ListGroupItem>
            Boarding Station : Muzaffarppur
          </ListGroupItem>
          <ListGroupItem>
            Reserved upto : Jaipur
          </ListGroupItem>
          <ListGroupItem>
            Class : 3A
          </ListGroupItem>
          {/* TODO: fetch list of customers */}
        </ListGroup>
      </Card>
    </Container>
  )
}

export default Home

