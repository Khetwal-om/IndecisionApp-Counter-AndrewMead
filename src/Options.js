import React from 'react';
import Option from './Option';
import Button from "reactstrap/es/Button";


const Options =(props)=>{

    return (
        <div>
            <div className={"widget-header"}>
                <h3 className={"widget-header__title"}>Your Options please</h3>
                <Button className={"button button--link"}
                        onClick={props.handleDeleteOptions}

                >Remove AlL</Button>
            </div>


                {props.options.length===0 && <p className={"widget-caption"}>Please enter something</p>}

            {props.options.map((option,index)=> (
                <Option
                    key={option}
                    optionText={option}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}

        </div>
    );


};

export default Options;
