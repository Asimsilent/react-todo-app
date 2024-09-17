import { useEffect, useState } from "react";
import "./App.css";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response);
      setProducts(response?.data?.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Row className="row-gap-3">
        {products?.map((el, index) => {
          return (
            <Col xs={12} md={6} lg={4}>
              <Card key={index}>
                <Card.Img
                  variant="top"
                  src={el?.thumbnail}
                  height={300}
                  width={160}
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
