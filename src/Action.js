import Button from "reactstrap/es/Button";
import React from "react";


const Action = (props)=>{
    return(
        <div>
            {/*<h3>from Action</h3>*/}
            <Button className={"big-button"}
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What to do?
            </Button>
        </div>
    );

};


export default Action;
