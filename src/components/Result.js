import React, { useContext } from 'react'
import { Container, Card, CardTitle, ListGroupItem, ListGroup } from 'reactstrap'
import { PnrContext } from '../context/Context'

const Result = () => {

    const context = useContext(PnrContext)


    return (
        <Container>
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

export default Result