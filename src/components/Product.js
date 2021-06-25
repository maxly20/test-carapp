import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ car, handleDelete }) => {
  const styles = {
    cardImage: {
      objectFit: 'cover',
      height: '150px',
    },
  };
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/car/${car._id}`}>
        <Card.Img src={car.image} variant='top' style={styles.cardImage} />
      </Link>

      <Card.Body>
        <Link to={`/car/${car._id}`}>
          <Card.Title as='div'>
            <strong>{car.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={car.rating} />
        </Card.Text>

        <Card.Text>{`${car.description.substring(0, 25)}...`}</Card.Text>

        <Card.Text as='h3'>${car.price.toLocaleString()}</Card.Text>

        <Button
          className='btn-block'
          type='button'
          onClick={() => handleDelete(car._id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
