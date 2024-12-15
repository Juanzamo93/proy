import { Col, Container, Row } from "reactstrap";
import Menu from "../components/Menu";
import '../styles/estilos2.css';


export function Kits() {
  return (
    <Container>
      <Row className="caja7">
        <h1>Header</h1>
      </Row>
      <Row>
        <Col>
          <Menu />
        </Col>
      </Row>
      <Row className="caja8">
        <Col xs="3">
        <h1>Lista</h1>
        </Col>
        
        <Col xs="3">
        imagen 1
        </Col>
        <Col xs="3">
        imagen 2
        </Col>
        <Col xs="3">
        imagen 3
        </Col>
      </Row>
      <Row>
        <Col xs="3">
        <h1>Lista</h1>
        </Col>
        
        <Col xs="3">
        imagen 1
        </Col>
        <Col xs="3">
        imagen 2
        </Col>
        <Col xs="3">
        imagen 3
        </Col>
      </Row>
      <Row>
        <Col xs="3">
        <h1>Lista</h1>
        </Col>
        
        <Col xs="3">
        imagen 1
        </Col>
        <Col xs="3">
        imagen 2
        </Col>
        <Col xs="3">
        imagen 3
        </Col>
      </Row>
      <Row className="caja9">
        <h1>Mas pedidos</h1>

      </Row>
      <Row className="caja10">
        <h1>Mejores productos</h1>

      </Row>
      <Row className="caja11">
        <h1>Footer</h1>
      </Row >


      
    </Container>
  )
} 