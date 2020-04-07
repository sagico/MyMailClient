import React, { Fragment, useState, useEffect } from 'react';
import './style.css';
import {Row, Col, Container, Button} from 'react-bootstrap';

import DataLoading from './DataLoadingComponent';
import PermissionsTable from './PermissionTable';

const Permission = (props) => {
    const [permissions, setPermissions] = useState([]);
    const [show, setShow] = useState(false);
    const [isLoadingData, setIsLoadingData] = useState(false);

    useEffect(() => {
        setPermissions([{DisplayName:'asdasdasd','Permission':1},{DisplayName:'asdasdasd','Permission':1},{DisplayName:'asdasdasd','Permission':0},{DisplayName:'asdasdasd','Permission':1},{DisplayName:'asdasdasd','Permission':0},{DisplayName:'asdasdasd','Permission':1},{DisplayName:'asdasdasd','Permission':0},{DisplayName:'asdasdasd','Permission':1},{DisplayName:'asdasdasd','Permission':0}])
      }, []); 

    const returnComponentToRender = () => { return isLoadingData ?  <DataLoading/> : <PermissionsTable data={permissions} options={props.options}/>;}

  return (
    <Fragment>
        <Container>
            <Row>
                <Col className="text-center">
                    {returnComponentToRender()}
                </Col>
            </Row>
        </Container>
    </Fragment>
  );
}
export default Permission;