import React,{Component} from 'react';
import Header from "./Header";
import 'normalize.css/normalize.css';
import './App.css';
import Options from "./Options";
import './styles/stylr.scss';



import AddOption from "./AddOption";
import Action from "./Action";
import Counter from './Counter';
// import VisibilityToggle from './VisibilityToggle';
import User from './User';

import OptionModal from './OptionModal';


class IndecissionApp extends Component{


    state={
        options:[],
        selectedOption: undefined
    };

    handleDeleteOptions=()=>{
        this.setState(()=>({options: []}));
    };

    handleDeleteOption=(optionToRemove)=>{
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>{
                return optionToRemove!==option;
            })
        }));

    };

    handlePick=()=>{
        const randomNum=Math.floor(Math.random() *this.state.options.length);
        const option=this.state.options[randomNum];

        this.setState(()=>({
           selectedOption: option
        }));

    };



    handleClearSelectedOption=()=>{
        this.setState(()=>({
            selectedOption:undefined
        }));
    };



    handleAddOption=(option)=> {

        if (!option) {
            return 'Enter a name';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Already in!';
        }

        // this.setState((prevState)=>{
        //     options:prevState.options.concat([option])
        // });

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    };


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


    render() {
        const subtitle="Will Give you my all!!!";

        return (
            <div>
                <Header  subtitle={subtitle}/>
                <div className={"container"}>


                    <Action
                        hasOptions={this.state.options.length>0}
                        handlePick={this.handlePick}
                    />

                <div className={"widget"}>
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                </div>

                {/*<Counter count={100}/>*/}

                {/*<User name={"James"} age={7}/>*/}

                <OptionModal selectedOption={this.state.selectedOption}
                 handleClearSelectedOption={this.handleClearSelectedOption}
                />
                </div>
            </div>
        );
    }
}






export default IndecissionApp;
