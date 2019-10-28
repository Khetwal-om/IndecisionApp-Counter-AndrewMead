import React,{Component} from 'react';
import Header from "./Header";
import './App.css';
import Options from "./Options";

import AddOption from "./AddOption";
import Action from "./Action";
// import Counter from './Counter';
// import VisibilityToggle from './VisibilityToggle';
import User from './User';


class IndecissionApp extends Component{


    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            options:['Zero','One', 'Two', 'Three']
    };
    }


    handleDeleteOptions(){
        this.setState(()=>{
           return{
            options:[]
           };
        });
    }

    handlePick(){
            const randomOption=Math.floor(Math.random=this.state.options.length);
            const option=this.state.options(randomOption);
            alert(option);
    }

    handleAddOption(option){

        if(!option){
            return 'Enter a name';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'Already in!';
        }

        this.setState((prevState)=>{
           return{
              options:prevState.options.concat([option])
           } ;
        });
    }



    render() {
        const title="INDECISION";
        const subtitle="Will Give you my all!!!";

        return (
            <div className="App">
                <Header title={title} subtitle={subtitle}/>
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <Action
                    hasOptions={this.state.options.length>0}
                    handlePick={this.handlePick}
                />

                <User name={"James"} age={7}/>
            </div>
        );
    }
}

export default IndecissionApp;
