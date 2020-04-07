import React, { Fragment, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import {Header, Icon} from 'semantic-ui-react';
import RemovePermission from '../Modals/RemovePermission';
import './style.css';

const PermissionTable = (props) => {
    const [show, setShow] = useState(false);
    const [permission, setPermission] = useState({});

    const onDeleteClick = (permission) => {
        setPermission(permission);
        setShow(true);
    }

  return (
    <Fragment>
        <Table id="Permission-Table" responsive className='App-Font'>
            <thead style={{fontSize:'1.5em'}}>
                <tr>
                    <th></th>
                    <th>הרשאה</th>
                    <th>שם</th>
                </tr>
            </thead>
            <tbody style={{fontSize:'1.1em', maxHeight:'20vh'}}>
            {props.data.map((permission,i) => 
                <tr key={i} >
                <td ><Button style={{backgroundColor: '#3e98c7',borderColor:'#3e98c7',fontWeight:'bold',color: 'white'}} onClick={(e,data) => {onDeleteClick(permission)}}>הסרה</Button></td>
                <td className="align-middle" >{props.options[permission.Permission].text}</td>
                <td className="align-middle" >{permission.DisplayName}</td>
                </tr>
            )}
            
            {props.data.length === 0 ? 
                <tr>
                    <td colSpan='3'>
                        <Header as='h3' icon textAlign='center'>
                            <Icon name='meh' circular /> 
                            <Header.Content>התיבה נקייה מהרשאות</Header.Content>
                        </Header>
                    </td>
                </tr>    
                : null
            }
               
            </tbody>
        </Table>
        <RemovePermission permission={permission} show={show} handleClose={(e,data) => setShow(false)} />
    </Fragment>
  );
}

export default PermissionTable;