import {Container, Row, Col} from 'react-bootstrap'
import Login from "./Login"

function App() {
    return (
          <Container className="App">
            <Row>
                <Col md={{span:6, offset:3}}>
                    <Login />
                </Col>
            </Row>
          </Container>
    );
  }
  
  export default App;