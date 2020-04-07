import React, { Fragment, useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import AddPermission from '../../Components/MyMail/Modals/Add/AddPermission';
import ChangeSize from '../../Components/MyMail/Modals/ChangeSize/index';
import InfoModal from '../../Components/MyMail/Modals/info';
import './style.css';


const NavBrandClass = (name) => {
    return window.location.href.includes(name) ? "Selected-Link" : "Not-Selected-Link";
}
const TabsContainer = (props) => {
    const [addPermissionShow, setAddPermissionShow] = useState(false);
    const [changeQuotaModalShow, setChangeQuotaModalShow] = useState(false);
    const [infoModalShow, setinfoModalShow] = useState(false);


    
const headers = [{title:'הוספת הרשאות', icon:'plus square', onclick:setAddPermissionShow},
                 {title:'הגדלת נפח תיבה', icon:'sort',  onclick:setChangeQuotaModalShow}, 
                 {title:'עזרה', icon:'help',  onclick:setinfoModalShow}]

  return (
    <Fragment>
         <Navbar style={{backgroundColor:'#444444', color:'#fbfbfb', textAlign:'center',justifyContent:'center'}}>          
            <Nav>
                <table>
                    <tbody>
                        <tr>
                            {headers.reverse().map((item, i)=> 
                                <td className={NavBrandClass(item.title)} key={i} onClick={(e,data) => item.onclick(true)}>
                                    <Navbar.Brand className={NavBrandClass(item.title)} 
                                                  style={{marginLeft:'1vw', color:'#fbfbfb'}} 
                                                  >{item.title}
                                      <Icon name={item.icon}/>
                                    </Navbar.Brand> 
                                </td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </Nav>
        </Navbar>

        <AddPermission show={addPermissionShow} handleClose={setAddPermissionShow} />
        <InfoModal show={infoModalShow} handleClose={setinfoModalShow} />
        <ChangeSize show={changeQuotaModalShow} handleClose={setChangeQuotaModalShow}/>
    </Fragment>
  );
}

export default TabsContainer;
