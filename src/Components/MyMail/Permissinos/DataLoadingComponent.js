import React, { Fragment } from 'react';
import { Spinner } from 'react-bootstrap';

const DataLoading = (props) => {
  return (
    <Fragment>
        <Spinner animation="border" role="status" variant="primary">
            <span className="sr-only">טוען נתונים...</span>
        </Spinner>
    </Fragment>
  );
}

export default DataLoading;
