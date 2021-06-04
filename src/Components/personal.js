import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Personal = (props) => {
    const imgStyle = {height:'200px',width:'250px'}
    const ButtonStyle ={backgroundColor:'goldenrod',width:'160px', height:'30px', border: '1px solid black'}
    const addHandler = props.addHandler;
    const personalStyle ={border: '1px solid black',padding:"10px",margin:"5px"}
    const{name,img,email,salary,skill} = props.person;
    return (
        <div style={personalStyle}>
            <p>This is my personal info</p>
            
                  <h5>NAME: {name}</h5>
                  <h5>EMAIL: {email}</h5>
                  <img style={imgStyle} src= {img} alt='description'/>
                  <h5>Skill: {skill}</h5>
                  <h5>Salary: {salary}</h5>
                  <div>
                  <button style={ButtonStyle}   onClick={()=>addHandler(props.person)}>Buy me <FontAwesomeIcon icon={faShoppingCart} /></button>
                  </div>
                 


           
        </div>
    );
};

export default Personal;