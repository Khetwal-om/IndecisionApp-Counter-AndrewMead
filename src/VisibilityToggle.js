import React,{Component} from 'react';


class VisibilityToggle extends Component{

    constructor(props){
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);

        this.state={
            visibility:false
        };
    }

    handleToggleVisibility(){
        console.log("handleToggleVisibility");

        this.setState((prevState)=>{
           return {
               visibility: !prevState.visibility
           }
        });
    }


    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility?'Hide ':'show'}
                </button>
                {this.state.visibility &&(
                    <div>will this work?</div>
                )}
            </div>
        );
    }
}


export default VisibilityToggle;
