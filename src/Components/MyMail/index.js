import React, { Fragment } from 'react';

import Permission from './Permissinos/index';
import { Container, Row, Col } from 'react-bootstrap';
import SizeProgress from './SizeProgress';
import Card from '../Card';
import '../style.css';

const MailboxOptions = [{key:'0', icon:'handshake', text:'שליטה מלאה', value: '0',description:'הרשאות שליטה מלאה על התיבה'},
                                {key:'1', icon:'address card', text:'שליחה בשם', value: '1',description:'הרשאות של שליחה בשם בלבד'}];

const CalendarOptions = [{key:'0', icon:'edit', text:'עריכה', value: '0', description:'יכולות עריכה של זימונים '},
                                 {key:'1', icon:'american sign language interpreting', text:'בעלות', value: '1',description:'הוספת בעלים על גבי הלו"ז האישי שלך'},
                                 {key:'2', icon:'street view', text:'סקירה', value: '2', description:'הרשאות סקירה בלבד על הלו"ז'},
                                 {key:'3', icon:'hourglass end', text:'זמינות בלבד', value: '3' ,description:'הצגת הזימונים ללא נושא ומידע נוסף'}];

const Actions = (props) => {
  return (
    <Fragment>
        <Container style={{marginTop:'5vh',maxWidth:'85vw'}} fluid>
          
           <Row>
          
              <Col md={2} style={{maxHeight:'57.5vh', overflowY:'hidden'}}> 
                <Row><Col><Card component={<SizeProgress lable='תיבת מייל' QueryURL='' in={true}/>} title="נפח תיבת מייל" /> </Col></Row>
                <Row><Col><Card component={<SizeProgress lable='תיבת ארכיון' QueryURL='' in={true}/>} title="נפח תיבת ארכיון" /> </Col></Row>
              </Col>
              <Col md={5}>
                  <Card component={ <Permission title='תיבה' queryURL='Permissions/MailboxPermissions/' 
                                        removeIcon='user delete' addIcon='add user' email={props.email}
                                        color='blue' options={MailboxOptions} option="Mailbox"
                                        description="ניהול ההרשאות על התיבה שלך, לחיצה על הוספה תפתח חלונית להוספת הרשאות"/>}
                        title="ניהול הרשאות תיבה אישית"  />
              </Col>

              <Col md={5}>
                  <Card component={  <Permission title='לו"ז' queryURL='Permissions/CalendarPermissions/' email={props.email}
                                          color='blue' options={CalendarOptions} option="Calendar" 
                                          description="ניהול ההרשאות על הלוז שלך, לחיצה על הוספה תפתח חלונית להוספת הרשאות" />}
                        title='ניהול הרשאות לו"ז' />
              </Col>
           </Row>
        </Container>
        
    </Fragment>
  );
}

export default Actions;
