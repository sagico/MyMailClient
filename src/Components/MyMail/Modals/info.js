import React, { Fragment } from 'react';
import { Modal  } from 'react-bootstrap';


const InfoModal = (props) => {
  

  return (
    <Fragment>
         <Modal show={props.show} onHide={props.handleClose} centered>
                <Modal.Header style={{display:'initial'}}>
                    <Modal.Title  className='text-right'>
                        מידע
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="text-right">
                 
                   
                </Modal.Body>
            </Modal>
            
    </Fragment>
  );
}

export default InfoModal;
