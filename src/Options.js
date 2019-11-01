import React from 'react';
import Option from './Option';
import Button from "reactstrap/es/Button";


const Options =(props)=>{

    return (
        <div>

            <Button onClick={props.handleDeleteOptions}>Remove AlL</Button>

            {props.options.length===0 && <p>Please enter something</p>}

            {props.options.map((option)=> (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}

        </div>
    );


};

export default Options;
