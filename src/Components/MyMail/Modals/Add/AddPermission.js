import React, { Fragment, useState } from 'react';
import { Modal  } from 'react-bootstrap';
import {  Menu} from 'semantic-ui-react';
import AddPermissionForm from './AddPermissionForm';

const MailboxOptions = [{lable:'שליטה מלאה', value: '0'},
                        {lable:'שליחה בשם', value: '1'}];

const CalendarOptions = [{lable:'עריכה', value: '0'},
                         {lable:'בעלות', value: '1'},
                         {lable:'סקירה', value: '2'},
                         {lable:'זמינות בלבד', value: '3'}];

const AddPermission = (props) => {
    const [activeItem, setActiveItem] = useState('הרשאות תיבה');

    const handleItemClick = (e, { name }) =>  {
        setActiveItem(name);
    }


  return (
    <Fragment>
         <Modal show={props.show} onHide={props.handleClose} centered>
                <Modal.Header style={{display:'initial'}}>
                    <Modal.Title  className='text-right'>
                        הוספת הרשאות   
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="text-right">
                    <Menu pointing secondary style={{display:'inline-flex', textAlign:'right'}}>
                        <Menu.Item
                            name='הרשאות לו"ז'
                            active={activeItem === 'הרשאות לו"ז'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='הרשאות תיבה'
                            active={activeItem === 'הרשאות תיבה'}
                            onClick={handleItemClick}
                        />
                    </Menu>

                   <AddPermissionForm options={activeItem ==='הרשאות תיבה' ? MailboxOptions : CalendarOptions} handleClose={props.handleClose} />
                          
                </Modal.Body>
            </Modal>
            
    </Fragment>
  );
}

export default AddPermission;
