import React,{Component} from 'react';
import {Button} from 'reactstrap';




class AddOption extends Component{

    constructor(props) {
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        }
    }


    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)

        this.setState(()=>{
            return{
                error:error
            };
        });

    }


    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type={"text"} name={"option"}/>
                <Button >Add Option</Button>
                </form>
            </div>
        );
    }
}

export default AddOption;
