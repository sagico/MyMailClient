import React, { Fragment, useState } from 'react';
import { Modal  } from 'react-bootstrap';
import {  Menu} from 'semantic-ui-react';


const ChangeSize = (props) => {
    const [activeItem, setActiveItem] = useState('נפח תיבה');

    const handleItemClick = (e, { name }) =>  {
        setActiveItem(name);
    }

  return (
    <Fragment>
         <Modal show={props.show} onHide={props.handleClose} centered>
                <Modal.Header style={{display:'initial'}}>
                    <Modal.Title  className='text-right'>
                        הגדלת נפח
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="text-right">
                    <Menu pointing secondary style={{display:'inline-flex', textAlign:'right'}}>
                        <Menu.Item
                            name='נפח תיבה'
                            active={activeItem === 'נפח תיבה'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='נפח ארכיון'
                            active={activeItem === 'נפח ארכיון'}
                            onClick={handleItemClick}
                        />
                    </Menu>

                   
                </Modal.Body>
            </Modal>
            
    </Fragment>
  );
}

export default ChangeSize;
