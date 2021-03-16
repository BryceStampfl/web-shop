import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from "./components/header/Header"
import store from './store';
import jwt_decode from "jwt-decode";
import { setCurrentUser, logout } from './_reducers/securitySlice'
import Landing from './components/Landing/Landing';
import SecuredRoute from './_securityUtils/SecuredRoute';
import Dashboard from './components/Dashboard/Dashboard';

import setJwtToken from "./_securityUtils/setJwtToken"

const jwtToken = localStorage.jwtToken

if (jwtToken) {
  setJwtToken(jwtToken)
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch(setCurrentUser(decoded_jwtToken));

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container fluid>

          {
            //public routes
          }
          <Route exact path="/" component={Landing} />


          {
            //private routes
          }
          <Switch>
            <SecuredRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          {/* <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Register />
            </Col>
          </Row>

          <Row>
            <Col>
              <AddProduct />
              <ProductList />
            </Col>
          </Row> */}
        </Container>
      </Router>
    </div>
  );
}

export default App;