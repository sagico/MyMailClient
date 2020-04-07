import React, { Fragment } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { PeopleCircle } from 'react-bootstrap-icons';

const Header = (props) => {
  return (
    <Fragment>
        <div style={{width:'100%',position:'block',lineHeight:'1.4',backgroundColor:'#1473e6', justifyContent:'center', display:'list-item'}}></div>
         <Navbar style={{backgroundColor:'white', color:'black'}} className="justify-content-between">
           <span>
                <PeopleCircle size={22}/> 
                <Navbar.Text className="App-Header-Logo">{props.Username}</Navbar.Text>
           </span>
          
            <Nav>
            <Navbar.Brand className="App-Header-Brand" style={{marginLeft:'1vw'}} href="#home">BioPass</Navbar.Brand>
            <Navbar.Brand className="App-Header-Brand" style={{marginLeft:'1vw'}} href="#home">כספת</Navbar.Brand>
            <Navbar.Brand className="App-Header-Brand" style={{marginLeft:'1vw'}} href="#home">MyMail</Navbar.Brand>
            </Nav>
        </Navbar>

        <div className="App-Header-Background-Image"></div>
    </Fragment>
  );
}

export default Header;
