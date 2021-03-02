import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Register from "./components/Register"
import ProductList from "./components/ProductList"
import AddProduct from "./components/AddProduct"
import Header from "./components/header/Header"


function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Register />
          </Col>
        </Row>

        <Row>
          <Col>
            <AddProduct />
            <ProductList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;