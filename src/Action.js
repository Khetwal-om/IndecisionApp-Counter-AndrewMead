import Button from "reactstrap/es/Button";
import React,{Component} from "react";

class Action extends Component{



    render()
    {
        return(
            <div>
                <h3>from Action</h3>
                <Button
                    onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}>
                    What to do?
                </Button>
            </div>
        );
    }
}


export default Action;
