import React, { Fragment } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Row, Col } from 'react-bootstrap';
import 'react-circular-progressbar/dist/styles.css';
import { Transition } from 'react-transition-group';


const duration = 1500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0.1,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const SizeProgress = (props) => {
  
  return (

    <Transition in={props.in} timeout={1500}>
        {state => (
           <span style={{...defaultStyle, ...transitionStyles[state],maxWidth:'6vw',display:'block',margin:'auto'}}>
           <Row>
             <Col> <CircularProgressbar value={32} text={`${32}%`} /></Col>
           </Row>
           <Row>
             <Col style={{fontSize:'1.8rem',textAlign:'center'}}>{props.lable}</Col>
           </Row>
           <Row>
             <Col style={{fontSize:'1.2rem',textAlign:'center'}}>0.8/2 GB</Col>
           </Row>
         </span>
        )}
      </Transition>
   
  );
}

export default SizeProgress;