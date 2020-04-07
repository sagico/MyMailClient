import React, { useState, useEffect } from 'react';
import './dropdownstyle.css';

const arr = ["fa-codepen","fa-dribble","fa-hackerrank","fa-free-code-camp"];
const DropDownComponent = (props) => {
    const [label, setLabel] = useState('בחר סוג הרשאה');
    
    useEffect(() => {
        setLabel('בחר סוג הרשאה');
        props.onSelect(-1);
    }, [props.options])
    

    const onChange = (data) => {
        props.onSelect(data.value);
        setLabel(data.lable);
        
    }
  return (
    <div>
        <div id="select-box">
            <input type="checkbox" id="options-view-button" />
            <div id="select-button" className="brd">
                
                <div>
                    <span>{label}</span> 
                </div>
            </div>

            <div id="options">
                {props.options.map((item) =>
                        <div className="option" onClick={(e,data) => {onChange(item)}}>
                        <input className="s-c top" type="radio" name="platform" value={item.value} />
                        <input className="s-c bottom" type="radio" name="platform" value={item.value} />
                        <i className={"fab " +  arr[item.value]}></i>
                        <span className="label">{item.lable}</span>
                        
                    </div>
                )}
            </div>
            
            <div id="option-bg"></div>
            </div>
    </div>
  );
}

export default DropDownComponent;