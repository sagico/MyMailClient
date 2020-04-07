import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './style.css';
const Card = (props) => {
  return (
    <Fragment>
        <Container className='Box'>
            <Row className="text-right Box-Title" >
                <Col> <strong>{props.title}</strong></Col>
            </Row>

            <Row className="text-center" style={{maxHeight:'44.2vh',overflowY:"auto"}}>
                <Col>
                    {props.component}
                </Col>
            </Row>
        </Container>
    </Fragment>
  );
}

export default Card;
