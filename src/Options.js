import React from 'react';
import Option from './Option';
import Button from "reactstrap/es/Button";


const Options =(props)=>{

    return (
        <div>

            <Button onClick={props.handleDeleteOptions}>Remove AlL</Button>
            {props.options.map((option)=> <Option key={option} optionText={option}/>)}
        </div>
    );


};

export default Options;
