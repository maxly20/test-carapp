import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import data from '../data';

const CarScreen = ({ match }) => {
  const car = data.find(item => item._id === match.params.id);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={car.image} alt={car.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{car.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Fuel Rating: <Rating value={car.rating} />
            </ListGroup.Item>
            <ListGroup.Item>Year: {car.year}</ListGroup.Item>
            <ListGroup.Item>
              Price: <strong>${car.price.toLocaleString()}</strong>
            </ListGroup.Item>
            <ListGroup.Item>Price Increase: {car.priceIncrease}</ListGroup.Item>
            <ListGroup.Item>Description: {car.description}</ListGroup.Item>
            <ListGroup.Item>Category: {car.category}</ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Link to='/'>
              <Button className='btn-block' type='button'>
                View More
              </Button>
            </Link>
          </ListGroup.Item>
        </Col>
      </Row>
    </>
  );
};

export default CarScreen;
