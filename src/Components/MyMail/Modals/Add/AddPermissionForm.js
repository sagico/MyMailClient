import React, { Fragment, useState } from 'react';
import {  Icon, Form, Checkbox, Dropdown } from 'semantic-ui-react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import SearchInput from './Search/SearchInput';
import DropdownComponent from './DropDown/DropDownComponent';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

function addDays (days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}


const AddPermissionForm = (props) => {
    const [selectedPermission, setSelectedPermission] = useState(-1);
    const [dateEnabled, setDateEnabled] = useState(true);
    const [selectedDate, setSelectedDate] = useState();

    const onPermissionTypeSelect = (value) => setSelectedPermission(value)

  return (
    <Fragment>
        <Form>
            <Form.Field>
                שם משתמש\ שם תצוגה
               <SearchInput onSelect={(data) => {}} />
            </Form.Field>

            <Form.Field>
                סוג הרשאה

                <DropdownComponent options={props.options} onSelect={onPermissionTypeSelect}/>
                
                    
            </Form.Field>

            <Form.Field>    
                תוקף הרשאה
                <Row>
                    <Col>   
                    הגבלת ההרשאה בזמן <Checkbox style={{verticalAlign:'middle'}} defaultIndeterminate  onChange={(e,data) => {setDateEnabled(!dateEnabled)}} />                                
                    </Col>

                    <Col>  
                        <DatePicker disabled={dateEnabled}
                                    selected={selectedDate}
                                    onChange={setSelectedDate}
                                    minDate={new Date()}
                                    maxDate={addDays(14)}
                                    placeholderText='בחר תאריך'/>   
                    </Col>
                </Row>


            </Form.Field>
      
         
            
            {/*dateEnabled ?  <Calendar minData={(new Date())} maxDetail='month' onClickDay={(value)=>{alert(value)}}/> : null */}
               
          
            <Container  className="text-left">
                            <Button variant="secondary" onClick={props.handleClose}>ביטול</Button>
                            {'  '}
                            <Button variant="info" type="submit">
                                הוספה
                            </Button>
            </Container>

        </Form>
          
    </Fragment>
  );
}

export default AddPermissionForm;