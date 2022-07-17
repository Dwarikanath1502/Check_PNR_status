import React, { useContext } from 'react'
import { Button, Container, Input, InputGroup } from 'reactstrap'
import { PnrContext } from '../context/Context'
import Result from './Result'


const Home = () => {

  const context = useContext(PnrContext)

  const errorMessage = () => {
    if (context.pnr === '') {
      return alert("Enter your PNR!")
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
      <Result />

    </Container>
  )
}

export default Home

