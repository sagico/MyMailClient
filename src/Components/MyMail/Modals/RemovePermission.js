import React, { Fragment } from 'react';
import { Modal,Button, Container} from 'react-bootstrap';


const RemovePermission = (props) => {
  return (
    <Fragment>
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header className="text-right d-inline">
                <Modal.Title>
                    <Container fluid className="text-right">
                     הסרת הרשאות 
                    </Container>    
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className="text-right">
                <p>האם אתה בטוח שברצונך להסיר את ההרשאות של {props.permission.DisplayName}</p>
            </Modal.Body>

            <Modal.Footer>
                <Container  className="text-left">
                    <Button variant="secondary" onClick={props.handleClose}>ביטול</Button>
                    {'  '}
                    <Button variant="danger">הסרה</Button>
                </Container>
               
            </Modal.Footer>
        </Modal>
    </Fragment>
  );
}

export default RemovePermission;
