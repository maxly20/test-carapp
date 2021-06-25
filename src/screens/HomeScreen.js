import { useState, useRef } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import Product from '../components/Product';
import data from '../data';

const HomeScreen = () => {
  // HomeScreen Car List Logic
  const [cars, setCars] = useState(data);
  const handleDelete = id => {
    const newCars = cars.filter(car => id !== car._id);
    setCars(newCars);
  };
  // Hide & Show the Form
  const [showForm, setShowForm] = useState(false);
  //Setting up the Form
  const [newCar, setNewCar] = useState({
    _id: '',
    name: '',
    image: '',
    description: '',
    brand: '',
    category: '',
    price: '',
    rating: '',
    year: '',
  });
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const brandInputRef = useRef();
  const categoryInputRef = useRef();
  const priceInputRef = useRef();
  const ratingInputRef = useRef();
  const yearInputRef = useRef();
  const imageInputRef = useRef();
  // Handle Form Submission Logic
  const handleSubmit = e => {
    e.preventDefault();
    setNewCar({
      _id: Number(new Date().getTime()),
      name: nameInputRef.current.value,
      image: URL.createObjectURL(imageInputRef.current.files[0]),
      description: descriptionInputRef.current.value,
      brand: brandInputRef.current.value,
      category: categoryInputRef.current.value,
      price: Number(priceInputRef.current.value),
      rating: Number(ratingInputRef.current.value),
      year: Number(yearInputRef.current.value),
    });
    console.log(newCar);

    const newCarList = [...cars, newCar];
    setCars(newCarList);
  };

  // COMPONENTS
  return (
    <>
      <h1>Top Cars</h1>
      <Row>
        {cars.map(car => (
          <Col key={car._id} sm={12} md={6} lg={4} xl={3}>
            <Product car={car} handleDelete={handleDelete} />
          </Col>
        ))}
      </Row>

      {/*============FORM============*/}
      <Button
        className='btn btn-light my-3'
        type='button'
        onClick={() => setShowForm(!showForm)}
      >
        <h2>Add Car</h2>
      </Button>
      {showForm && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicName'>
            <Form.Label>Name *</Form.Label>
            <Form.Control
              ref={nameInputRef}
              type='text'
              placeholder='Enter name'
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicDescription'>
            <Form.Label>Description *</Form.Label>
            <Form.Control
              ref={descriptionInputRef}
              type='text'
              placeholder='Enter description'
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicBrand'>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              ref={brandInputRef}
              type='text'
              placeholder='Enter description'
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='formBasicCategory'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              ref={categoryInputRef}
              type='text'
              placeholder='Enter description'
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='formBasicPrice'>
            <Form.Label>Purchase Price *</Form.Label>
            <Form.Control
              ref={priceInputRef}
              type='number'
              placeholder='Enter price'
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicRating'>
            <Form.Label>Fuel Rating *</Form.Label>
            <Form.Control
              ref={ratingInputRef}
              type='number'
              placeholder='Enter fuel rating'
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicYear'>
            <Form.Label>Year</Form.Label>
            <Form.Control
              ref={yearInputRef}
              type='number'
              placeholder='Enter year'
            />
          </Form.Group>

          <Form.Group controlId='formBasicImage'>
            <Form.Label>Upload Image *</Form.Label>
            <Form.File
              ref={imageInputRef}
              id='custom-file'
              label='Upload Image'
              custom
              required
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      )}
    </>
  );
};

export default HomeScreen;
