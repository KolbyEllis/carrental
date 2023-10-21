import React from 'react';
import { Card } from 'react-bootstrap';

function Info() {
  return (
    <div className=''>
        <div className='test2'>
        <h5>Plan your trip now</h5>
        <h1>
            Quick & easy car rental
        </h1>
        <div className='test3'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/operator.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/car-icon.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/van-icon.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        </div>
        
    </div>

  );
}

export default Info;
