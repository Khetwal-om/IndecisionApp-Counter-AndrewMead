import React,{Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);


        this.state={
            count: 0,
            clicks:0
        };

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.count!==this.state.count){
            localStorage.setItem('count',this.state.count);
        }



        console.log('compooooi');

    }

    componentDidMount() {
        const stringCount=localStorage.getItem('count');
        const count=parseInt(stringCount,10);

        if(!isNaN(count)){
            this.setState(()=>({count}));
        }

    }


    handleAddOne(){
        this.setState((prevState)=>{
            return {
              count:prevState.count+1,
              clicks:prevState.clicks+1
            };
        });
    };

    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count :prevState.count - 1,
                clicks:prevState.clicks+1
        };
        });
        console.log("this is from handleMinusOne");
    };
    handleReset(){
        this.setState((prevState)=>{
               return{
                   count:0,
                   clicks:prevState.clicks+1
               };
            }
        );
    };


    render() {



        return (
            <div>
                <h1>Count:{this.state.count}  </h1>
                <h5>Clicks:  {this.state.clicks}</h5>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>

            </div>
        );
    }
}



export default Counter;
