import React,{Component} from 'react';
import Header from "./Header";
import './App.css';
import Options from "./Options";

import AddOption from "./AddOption";
import Action from "./Action";
import Counter from './Counter';
// import VisibilityToggle from './VisibilityToggle';
import User from './User';


class IndecissionApp extends Component{


    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);

        this.state={
            options:[]
    };
    }

    componentDidMount() {

        try {
            const json=localStorage.getItem('options');
            const options=JSON.parse(json);
            if(options){
                this.setState(()=>({options:options}));
            }

        }catch (e) {
            //Do nothing

        }




        console.log("componentDidMount");
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevState.options.length!==this.state.options.length){
            console.log('saving data');

            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmout");
    }


    handleDeleteOptions(){
        this.setState(()=>({options: []}));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
           options:prevState.options.filter((option)=>{
               return optionToRemove!==option;
           })
        }));

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

        // this.setState((prevState)=>{
        //     options:prevState.options.concat([option])
        // });

        this.setState((prevState)=>{
           return{
              options:prevState.options.concat([option])
           } ;
        });



    }



    render() {
        const subtitle="Will Give you my all!!!";

        return (
            <div className="App">
                <Header  subtitle={subtitle}/>
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <Action
                    hasOptions={this.state.options.length>0}
                    handlePick={this.handlePick}
                />
                <Counter count={100}/>

                <User name={"James"} age={7}/>
            </div>
        );
    }
}






export default IndecissionApp;
