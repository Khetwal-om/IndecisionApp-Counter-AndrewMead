import React,{Component} from 'react';
import Option from './Option';
import Button from "reactstrap/es/Button";

class Options extends Component{


    render() {

        return (
            <div>

                <Button onClick={this.props.handleDeleteOptions}>Remove AlL</Button>
                {this.props.options.map((option)=> <Option key={option} optionText={option}/>)}
            </div>
        );
    }
}


export default Options;
