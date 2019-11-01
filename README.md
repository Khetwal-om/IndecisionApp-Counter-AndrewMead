 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify













---

# ReactDOM.render()

* takes two arguments 
 * template ( compiled version by babel)
 * element  ( using document.getElementById())
 
```javascript
var templates= <p> This is JSX <p>;
```

this compiles down to by babel

```javascript
var template = React.createElement(
    'p',
    null,
    'This is JSX'
);
```

which the browser does understand.


### look at this again, #null


```javascript
var templates= <p id={"something"}> This is JSX <p>;
```

this compiles down to ... by babel

```javascript
var template = React.createElement(
    'p',
    {id: "something"},
    'This is JSX'
);
```

---



* *babel on its own has no functionality babel is a compiler but it
is not gonna compile anything by default we have to add various plugins and presets
 inorder  to get any sort of change in our code*






1. My first component Header.js

```javascript
import React,{Component} from 'react';

class Hakuma extends Component{
    render() {
        const name="hola";
        const hakuma="hakuma matata";
        return(
            <div>
                <h1>This is {name} my first component</h1>
                <h2>Hakuma Matata{hakuma.toUpperCase()} No worries, enjoy  </h2>
            </div>
        );
    }
}


export default Hakuma

```

2. This component will be used in App.js


```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hakuma from './Hakuma';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Check react it's amazing </h1>
          <h2>OMI</h2>
          <Hakuma/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

```




3. *undefined null and logical && * are ignored by JSX.


4. Using variables and functions within render() and then displaying it using return(<div></div>);


```javascript
import React,{Component} from 'react';

class Hakuma extends Component{
    render() {
        const name="James";
        const hakuma=19;
        const location="Geneva";

        function getLocation(location) {
            if(location)
            {
                return <h1>Location: {location}</h1>;
            }
        }

        return(
            <div>

                <h1>This is {name? name : 'none'} my first component</h1>
                <h2>Hakuma Matata{hakuma>=15 && <p>{hakuma}</p>} No worries, enjoy  </h2>
                {getLocation(location)}
            </div>
        );
    }
}


export default Hakuma

```


5. *const and let* , var is replaced by these. var can lead to some misuse.

   
  * With *var* one can redefine as well as reassign value
    



  * With *let* I can reassign the value but can't redefine it.
  
```javascript
import React,{Component} from 'react';

class Hakuma extends Component{
    render() {


        let nameLet='Jen';
        console.log(nameLet);

        nameLet='Julie';
        console.log(nameLet);
        return(
            <div>
                <h3>Goodies</h3>
            </div>
        );
    }
}


export default Hakuma

```


   * With **const** we can't even **reassign** the value.
   
   

6. *var* based variable are function specific , can't be accessed outside
function. 



7. *const* and *let* have **Block level Scoping**  ,
only var can display the given

```javascript
 var fullName="Hakuma matada";
        if(fullName)
        {
            var firstName=fullName.split(' ')[0];
            console.log(firstName);
        }
        console.log(firstName); 
       
```


*firstName* is not defined in the case of const

```javascript
        const fullName="Hakuma matada";
        if(fullName)
        {
            const firstName=fullName.split(' ')[0];
            console.log(firstName);
        }
        console.log(firstName);

```

---

*Same is true for let*


```javascript
        let fullName="Hakuma matada";
        if(fullName)
        {
            let firstName=fullName.split(' ')[0];
            console.log(firstName);
        }
        console.log(firstName);

```
---


### Don't worry try this code and need of var is eradicated.

```javascript
        let fullName="Hakuma matada";
        let firstName;
        if(fullName)
        {
            firstName=fullName.split(' ')[0];
            console.log(firstName);
        }
        console.log(firstName);
```


---

#Arrow Function


1. The given is the *arrow function* and normal function.

> ES6 ARROW FUNCTION are always anonymous\
ES5 normal function...

```javascript

    const square= function(x){
      return x*x;
    };

    console.log(square(7));

    const cube=(number)=>{
      return number*number*number;
    };
    console.log(cube(7));
```

 * The above arrow function with single expression can be *rewritten*
  as 
  
```javascript
    const squareArrow=(x)=> x*x;
```

 * Some more examples for the above
 
```javascript
class App extends Component {
  render()
  {


    const firstName=(name)=>name.split(" ")[0];
    console.log(firstName("Timon Pumba"))
    const squareArrow=(x)=> x*x;
    console.log(squareArrow(4));

    return (
      <div className="App">
          <Hakuma/>

      </div>
    );
  }
}

```


### Arrow functions part 2



```javascript
    const add = function (a,b) {
      console.log(arguments);
      return a+b;
    };
    console.log(add(3,43));

```

* Even if we pass more arguments than specified in the parameter 
console.log(arguments) displays them all.

```javascript
const add = function (a,b) {
      console.log(arguments);
      return a+b;
    };
    
Arguments(6) [3, 43, 11, 2, 3, 4, callee: (...), Symbol(Symbol.iterator): ƒ]
```

---



* This gives an error because **arrow* function don't have arguments property.



```javascript

    const user = {
      name: 'Anglina',
      cities : ['philadenphia','LA','NYC','Dublin'],
      printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
      }
    };

    user.printPlacesLived();


(4) ["philadenphia", "LA", "NYC", "Dublin"]
0: "philadenphia"
1: "LA"
2: "NYC"
3: "Dublin"

```



* Check this.name ain't accessible down below the anonymous function or
nested function.

```javascript
    const user = {
      name: 'Anglina',
      cities : ['philadenphia','LA','NYC','Dublin'],
      printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);


        this.cities.forEach(function (city) {
          console.log(this.name+'is beautiful'+city);
        })
      }
    };

    user.printPlacesLived();

```



* Above is working now


```javascript
    const user = {
      name: 'Anglina',
      cities : ['philadenphia','LA','NYC','Dublin'],
      printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        const that=this;


        this.cities.forEach(function (city) {
          console.log(that.name+'is beautiful'+city);
        })
      }
    };

    user.printPlacesLived();


(4) ["philadenphia", "LA", "NYC", "Dublin"]
App.js:21 Anglinais beautifulphiladenphia
App.js:21 Anglinais beautifulLA
App.js:21 Anglinais beautifulNYC
App.js:21 Anglinais beautifulDublin
```



* **arrow** function doesn't bind it's this value .It's working now even without specifying const that=this;

```javascript
    const user = {
      name: 'Anglina',
      cities : ['philadenphia','LA','NYC','Dublin'],
      printPlacesLived: function () {

        this.cities.forEach((city) => {
          console.log(this.name+'is beautiful'+city);
        })
      }
    };

    user.printPlacesLived();

```


* Look this is weird but it works

```javascript
    const user = {
      name: 'Anglina',
      cities : ['philadenphia','LA','NYC','Dublin'],
      printPlacesLived() {

        this.cities.forEach((city) => {
          console.log(this.name+'is beautiful'+city);
        })
      }
    };

    user.printPlacesLived();

```


### Most common array method map

* **map**




```javascript
    const user = {
      name: 'Anglina',
      cities : ['philadenphia','LA','NYC','Dublin'],
      printPlacesLived() {
        const cityMessages=this.cities.map((city)=>{
                    return city;
        });
        return cityMessages;
      }
    };

    console.log(user.printPlacesLived())  ;

```

* With map we can transform the item viz concatenation


```javascript

    const user = {
      name: 'Angel',
      cities : ['philadenphia','LA','NYC','Dublin'],
      printPlacesLived() {
        const cityMessages=this.cities.map((city)=>{
                    return city.concat('!');
        });
        return cityMessages;
      }
    };

    console.log(user.printPlacesLived())  ;


     ["philadenphia!", "LA!", "NYC!", "Dublin!"]
```

* Another version

```javascript

    const user = {
      name: 'Angel',
      cities : ['philadenphia','LA','NYC','Dublin'],
      printPlacesLived() {
        const cityMessages=this.cities.map((city)=>{
                    return this.name+ 'has lived in'+city;
        });
        return cityMessages;
      }
    };

    console.log(user.printPlacesLived())  ;

ngelhas lived inphiladenphia", "Angelhas lived inLA", "Angelhas lived inNYC", "Angelhas lived inDublin"]
0: "Angelhas lived inphiladenphia"
1: "Angelhas lived inLA"
2: "Angelhas lived inNYC"
3: "Angelhas lived inDublin"

```



4. The code can be reduced to given version:

```javascript

    const user = {
      name: 'Angel',
      cities : ['philadenphia','LA','NYC','Dublin'],
      printPlacesLived() {
        return this.cities.map((city) => this.name + 'has ' + city);
      }
    };

    console.log(user.printPlacesLived())  ;

```

5. Array is multiplied by a number

```javascript
    const multiplier ={
      numbers:[1,43,23,5,23],
      multiplyBy:10,

    multiply(){
      return this.numbers.map((number)=>number*this.multiplyBy );
    }
    };
    console.log(multiplier.multiply());


```


---

# 11. Events and Attributes

---




1. JSX doesn't have built in data binding. 

>The given expression is run before anything is rendered to the screen.

```javascript
                <button onClick={addOne}>Plus</button>
                <button onClick={minusOne}>Minus</button>
                <button onClick={resetOne}>reset</button>

```




---

## Skipped after 12



# Components in React



### ES6 classes part one

---

1. class in js

```javascript



class Person{
    constructor(name='Steve'){
        this.name=name;
    }


    getGretting(){
        return this.name;
    }
}


const obj=new Person();
const me=new Person('Andrew taylor');
console.log(me.getGretting());
console.log(obj);



export default Person;

```


2. Try ``

```javascript
    getGretting(){
        return `${this.name}+ yeahhhh`
    }

```


3. Creating subclasses


```javascript



class Person{
    constructor(name='Steve',age=0){
        this.age=age;
        this.name=name;
    }


    getGretting(){
        return `${this.name}is ${this.age}`;
    }


}


class Student extends Person{
    constructor(name,age,major='nothing'){
        super(name,age);
        this.major=major;
    }
}


const obj=new Student('Andrew',20,'Computer science');
console.log(obj);


export default Person;



```



4. Overriding parent methods


```javascript



class Person{
    constructor(name='anonymous',age=0){
        this.age=age;
        this.name=name;
    }


    getGretting(){
        return `${this.name}is ${this.age}`;
    }


    getDescription(){
        return 'I am description from the Person';
    }

}


class Student extends Person{
    constructor(name,age,major='nothing'){
        super(name,age);
        this.major=major;


    }

    hasMajor(){
        return !!this.major;
    }

    getDescription() {
        return 'from student';
    }
}


const obj=new Student('Andrew',20,'Computer science');
console.log(obj);
console.log(obj.hasMajor());
console.log(obj.getDescription());

const nova=new Person();
console.log(nova);
console.log(nova.hasMajor());

console.log(obj.getDescription());

export default Person;

```



6. Overridden one

```javascript

    getDescription() {

        return 'from student'+super.getDescription();
    }
```


7. 



* Indecision App
  * Header
  * Action
  * Options
    * Option
  * AddOption



1. Indecision Component


```javascript
import React,{Component} from 'react';
import Header from "./Header";
import './App.css';
import Options from "./Options";

import AddOption from "./AddOption";
import Action from "./Action";


class IndecissionApp extends Component{
    render() {
        return (
            <div className="App">
                <Header/>
                <Options/>
                <AddOption/>
                <Action/>

            </div>
        );
    }
}

export default IndecissionApp;

```

2. Header component

```javascript
import React,{Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <p>Nothing here.</p>
            </div>
        );
    }

}



export default Header

```


3. Options

```javascript
import React,{Component} from 'react';
import Option from './Option';

class Options extends Component{
    render() {
        return (
            <div>
                <h3>from Options</h3>
                 <Option/>
            </div>
        );
    }
}


export default Options;

```



4. Option

```javascript
import React,{Component} from 'react';


class Option extends Component{
    render() {
        return (
            <div>
                <h3>I am the option</h3>
            </div>
        );
    }
}

export default Option;

```


5. Action Component

```javascript
import Button from "reactstrap/es/Button";
import React,{Component} from "react";

class Action extends Component{
    render()
    {
        return(
            <div>
                <h3>from Action</h3>
                <Button>What to do?</Button>
            </div>
        );
    }
}


export default Action;

```


### Part 2 Props


---

**Pass data when we initialize an instance component ,this data is props**


1. Option one

```javascript
import React,{Component} from 'react';
import Header from "./Header";
import './App.css';
import Options from "./Options";

import AddOption from "./AddOption";
import Action from "./Action";


class IndecissionApp extends Component{

    render() {
        const title="INDECISION";
        const subtitle="Will Give you my all!!!";
        const options=['One',
        'Two',
        'Three'];

        return (
            <div className="App">
                <Header title={title} subtitle={subtitle}/>
                <Options options={options}/>
                <AddOption/>
                <Action/>

            </div>
        );
    }
}

export default IndecissionApp;

```

2. In Options.js

```javascript
import React,{Component} from 'react';
import Option from './Option';

class Options extends Component{
    render() {
        return (
            <div>
                {
                this.props.options.map((option)=> <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}


export default Options;

```


3. In Option.js


```javascript
import React,{Component} from 'react';


class Option extends Component{
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

export default Option;

```


### Event handlers


1. *handlePick()* method


```javascript
import Button from "reactstrap/es/Button";
import React,{Component} from "react";

class Action extends Component{

    handlePick(){
        alert('handlePick');
    }


    render()
    {
        return(
            <div>
                <h3>from Action</h3>
                <Button onClick={this.handlePick}>What to do?</Button>
            </div>
        );
    }
}


export default Action;

```









2.  Events and methods,make handleAddOption with the help
of **preventDefaullt**.


```javascript
import React,{Component} from 'react';
import {Button} from 'reactstrap';




class AddOption extends Component{

    handleAddOption(e){
        e.preventDefault();

        const option=e.target.elements.option.value.trim();
        if (option){
            alert(option);
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type={"text"} name={"option"}/>
                <Button >Add Option</Button>
                </form>
            </div>
        );
    }
}

export default AddOption;

```
---

4. **Method Binding** or better to say *this* binding.

> Method binding for class methods


#### Need to google bind mdn



5. In Options.js {this.handleRemoveAll.bind(this)} works but it
ain't efficient.It requires us to refresh it every time 
component re-renders .


```javascript

class Options extends Component{

    handleRemoveAll(){
        console.log(this.props.options);
    }
    render() {

        return (
            <div>

                <Button onClick={this.handleRemoveAll.bind(this)}>Remove AlL</Button>

                {this.props.options.map((option)=> <Option key={option} optionText={option}/>)}
            </div>
        );
    }
}


export default Options;

```

6. Let's override constructor function. Our Goal is to bind
handle remove all.

```javascript
import React,{Component} from 'react';
import Option from './Option';
import Button from "reactstrap/es/Button";

class Options extends Component{
    constructor(props){
        super(props);
    }

    
    handleRemoveAll(){
        console.log(this.props.options);
    }
    render() {

        return (
            <div>

                <Button onClick={this.handleRemoveAll}>Remove AlL</Button>
                {this.props.options.map((option)=> <Option key={option} optionText={option}/>)}
            </div>
        );
    }
}


export default Options;

```



7. The given code ensures that wherever we call handleRemoveAll
the context is correct ,if I use it multiple times below I won't have
to type multiple manual binds . Which also means that I run
this binding once when component first gets initialized.


```javascript
    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
    }

```


8 __Component State__. allows our component to manage data.
Think of object with key value pairs ,when that data changes
the component will automatically re-renders in order to 
reflect those changes.  


---

<Counter/>

1. Setup default state object.

{
count:0
}

2. Component rendered with default state values*(*implicit).

handleAddOne(){
// Increase "count" state by 1.
}

3. Change state based on event. Maybe button click,network request.

4. Component re-rendered using new state values*.

5. Start 3 again.

---




8. Counter.js


```javascript
import React,{Component} from 'react';

class Counter extends Component{
    render() {
        return (
            <div>
                <h1>Count:  </h1>
                <button>+1</button>
                <button>-1</button>
                <button>reset</button>

            </div>
        );
    }
}


export default Counter;

```

9. Now

>Create three methods : handleAddOne,handleMinusOne,handleReset\
Use console.log to print method name\
Wire up onClick & bind in the constructor



10. Adding state to counter app part 1




> Fix the given issue in the code.
 
 
 *handleAddOne' is not defined       no-undef*
 *Line 8:  'handleMinusAddOne' is not defined  no-undef*
 *Line 9:  'handleReset' is not defined        no-undef*

```javascript
import React,{Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props);
        this.handleAddOne=handleAddOne.bind(this);
        this.handleMinusOne=handleMinusAddOne.bind(this);
        this.handleReset=handleReset.bind(this);

    }

    handleAddOne(){
        console.log("this is from handleOne");
    };

    handleMinusOne(){
        console.log("this is from handleMinusOne");
    };
    handleReset(){
        console.log("this is from handleReset");
    };




    render() {



        return (
            <div>
                <h1>Count:  </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>

            </div>
        );
    }
}


export default Counter;

```


9. The given is fixed this.handleAddOne=this.handleAddone.bind(this)
instead of this.handleAddOne=handleAddone.bind(this)

```javascript
import React,{Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);

    }

    handleAddOne(){
        console.log("this is from handleOne");
    };

    handleMinusOne(){
        console.log("this is from handleMinusOne");
    };
    handleReset(){
        console.log("this is from handleReset");
    };


    render() {



        return (
            <div>
                <h1>Count:  </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>

            </div>
        );
    }
}


export default Counter;

```


10. Now following the above steps

step 1. setup default state object


```javascript
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);


        this.state={
            count: 10
        };

    }
```

step 2. is when the component renders actually ,it uses those values 
and use them.







step 3:  Change state based on event

```javascript
    handleAddOne(){
        this.state.count=this.state.count+1;
        console.log("this is from handleOne"+this.state.count);
    };

```

  * further can be rewriiten as, this is working exactly in the we
  wanted it to run.
  
  > NOTE: don't mutate state directly 
 
```javascript
    handleAddOne(){
        this.setState(()=>{
            return {
              count:1
            };
        });
    };

```


   * One step further
   
  ### We do have prevState( say it anything) , it have access
  *to the last value of the object say count for now. We gonna
  use  this prevState inorder to make changes.*
   
```javascript

    handleAddOne(){
        this.setState((prevState)=>{
            return {
              count:prevState.count+1
            };
        });
    };

```


  * Yeah I did it
  
```javascript
import React,{Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);


        this.state={
            count: 0
        };

    }

    handleAddOne(){
        this.setState((prevState)=>{
            return {
              count:prevState.count+1
            };
        });
    };

    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count :prevState.count - 1
        };
        });
        console.log("this is from handleMinusOne");
    };
    handleReset(){
        this.setState(()=>{
               return{
                   count:0
               };
            }
        );
    };


    render() {



        return (
            <div>
                <h1>Count:{this.state.count}  </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>

            </div>
        );
    }
}


export default Counter;

```



  * This is my new feature , just count the number of clicks i.e
  Number of times the three buttons were clicked.
  
```javascript
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

```




11. Alternative  for this.setState also allows to pass an object
directly instead of  function , 


```javascript

handleReset(){
    this.setState({
       count:0
    });
    this.setState({
    count: this.state.count+1
    })
}
```


12. This is something what we expected 

```javascript

    handleReset(){
        this.setState((prevState)=>{
               return{
                   count:0,
                   clicks:prevState.clicks+1
               };
            }
        );

        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }
        });
    };
```



13. Build it : Adding state to VisibilityToggle


```javascript
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
            return{
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

```



## Indecision part 1


---

1. Indecision.js

```javascript
import React,{Component} from 'react';
import Header from "./Header";
import './App.css';
import Options from "./Options";

import AddOption from "./AddOption";
import Action from "./Action";
import Counter from './Counter';
import VisibilityToggle from './VisibilityToggle';



class IndecissionApp extends Component{


    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);

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
                <AddOption/>
                <Action hasOptions={this.state.options.length>0}/>
            </div>
        );
    }
}

export default IndecissionApp;

```



2. In Options.js


```javascript
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

```


---


## Component like options can't change its own prop,s new props
##values can get pass down from parent those trigger to re-render in child.


*props are read only*


1. 

```javascript
import React,{Component} from 'react';
import Header from "./Header";
import './App.css';
import Options from "./Options";

import AddOption from "./AddOption";
import Action from "./Action";
// import Counter from './Counter';
// import VisibilityToggle from './VisibilityToggle';



class IndecissionApp extends Component{


    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
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
                <AddOption/>
                <Action
                    hasOptions={this.state.options.length>0}
                    handlePick={this.handlePick}
                />
            </div>
        );
    }
}

export default IndecissionApp;

```


2. Action.js

```javascript
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

```



3. In InDecisionApp


```javascript
this.handleAddOption=this.handleAddOption.bind(this);
        
handleAddOption(option){
    console.log(option);
}

<AddOption handleAddOption={this.handleAddOption}    />

```








4. AddOption






```javascript
import React,{Component} from 'react';
import {Button} from 'reactstrap';




class AddOption extends Component{

    constructor(props) {
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
    }


    handleAddOption(e){
        e.preventDefault();

        const option=e.target.elements.option.value.trim();
        if (option){
            this.props.handleAddOption(option)
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type={"text"} name={"option"}/>
                <Button >Add Option</Button>
                </form>
            </div>
        );
    }
}

export default AddOption;

```



4. This is it,adding option via UI

```javascript

    handleAddOption(option){
        this.setState((prevState)=>{
           return{
              options:prevState.options.concat([option])
           } ;
        });

```


5. In AddOption.js


```javascript
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

```



# Stateless functional component


1. User.js


```javascript
import React from 'react';





const User=(props)=>{
    return(
        <div>

            <p>Name{props.name}</p>
            <p>Goals{props.age}</p>
        </div>
    );
};


export default User;

```


2. ANother example

```javascript
import React from 'react';
import Option from './Option';
import Button from "reactstrap/es/Button";


const Options =(props)=>{

    return (
        <div>

            <Button onClick={props.handleDeleteOptions}>Remove AlL</Button>
            {props.options.map((option)=> <Option key={option} optionText={option}/>)}
        </div>
    );


};

export default Options;

```



3. *default prop values*


  * Changes made in Header
  
```javascript
import React,{Component} from 'react';


const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    );
};

Header.defaultProps={
    'title':'Golazooo '
};

export default Header

```


  * Now we will stop props value being passed from IndecisionApp
  component  *Header*

    **Before**

```javascript
        <Header  title={title} subtitle={subtitle}/>
```
    **After**


```javascript
        <Header  subtitle={subtitle}/>
```



4. Conditional subtitle


```javascript
import React,{Component} from 'react';


const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    );
};

Header.defaultProps={
    'title':'Golazooo '
};

export default Header

```




5. Remove subtitle from <Header/> ,We will still see the title,
without subtitle

6. Using the above defaultProps in IndecisionApp



```javascript
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
            options:props.options
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
        const subtitle="Will Give you my all!!!";

        return (
            <div className="App">
                <Header  subtitle={subtitle}/>
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



IndecissionApp.defaultProps={
  options: []
};



export default IndecissionApp;

```



7. Repeating the same for Counter.js


```javascript
import React,{Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);


        this.state={
            count: props.count,
            clicks:0
        };

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

Counter.defaultProps={
    count:9
};


export default Counter;

```



8. Can do this to do the same

```javascript
 <Counter count={100}/>
```


9. Consider this code


```javascript

    handleDeleteOptions(){
        this.setState(()=>{
           return{
            options:[]
           };
        });
    }
```


10. We can simplify this as above function is returning object.

11. const num=()=>{}   **returns function**

12. const num=()=>({}) **returns object**


13. Our code **9** gets minimized

```javascript

    handleDeleteOptions(){
        this.setState(()=>({options: []}));
    }

```

14. These two are exactly the same

```javascript
this.setState((prevState)=>{
   options:prevState.options.concat([option])
});

   this.setState((prevState)=>{
           return{
              options:prevState.options.concat([option])
           } ;
        });
```



15. In AddOption.js

```javascript
        
this.setState(()=>{
    return{
                error:error
            };
        });

```


 *Can be written as
 
 
```javascript
this.setState(()=>({error:error}));

```




### Remove single item



1. 


 *
     handleDeleteOption(option){
         console.log('calling',option);
     }


 * this.handleDeleteOption=this.handleDeleteOption.bind(this);


 * In options.js
 
```javascript
import React from 'react';
import Option from './Option';
import Button from "reactstrap/es/Button";


const Options =(props)=>{

    return (
        <div>

            <Button onClick={props.handleDeleteOptions}>Remove AlL</Button>
            {props.options.map((option)=> (
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
                
        </div>
    );


};

export default Options;

```


 * In option.js
 
 
```javascript
import React from 'react';



const Option=(props)=>{
    return (
        <div>
            {props.optionText}
            <button onClick={props.handleDeleteOption}>remove</button>
        </div>
    );
};




export default Option;

```

 * This will be further breaked down to
 
```javascript
import React from 'react';



const Option=(props)=>{
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText)
                }}
            >
                remove</button>
        </div>
    );
};




export default Option;

```
 
 * Eventually, this removes everything
 
 
```javascript
    handleDeleteOption(option){
        this.setState((prevState)=>({
           options:prevState.options.filter((option)=>{
               return false;
           })
        }));

    }

```


  * We want single one to be removed
  
```javascript

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
           options:prevState.options.filter((option)=>{
               return optionToRemove!==option;
           })
        }));

    }
```


   * Can use the shorthand operation
   
```javascript
this.setState(prevState)=>({
options: prevState.options.filter((option)=>optionToRemove!==option)
})
```






# Differences between functional and class based  components

---

### Life cycle methods

1. **componentDidMount** works with class based components, 
they never deal with functional components making the latter
fast.


```javascript
    componentDidMount() {
        console.log("componentDidMount");
    }
```


2. **componentDidUpdate**

```javascript

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }
    
    
```


3. **componentDidUnmount** is rarely used

```javascript

    componentWillUnmount() {
        console.log("componentWillUnmout");
    }
```




## Making the data to persist

---

1. Using localStorage.setItem('name','james');
> this works with string data

 Using localStorage.getItem('name');



2. Now we will use JSON

  *  JSON.stringify takes regular js object convert it to string.
  
  
  *  JSON.parse takes string representation and returns
  js object



3. Within IndecisionApp.js file

```javascript

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevState.options.length!==this.state.options.length){
            console.log('saving data');

            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
```




5. Wow

```javascript
    componentDidMount() {
        const json=localStorage.getItem('options');
        const options=JSON.parse(json);
        this.setState(()=>({options:options}));

        console.log("componentDidMount");
    }


```


6. Invalid data


```javascript
    componentDidMount() {
        const json=localStorage.getItem('options');
        const options=JSON.parse(json);

        if(options){
            this.setState(()=>({options:options}));
        }

```


7. Again for bad data

```javascript
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

```



8. ALl edge cases are handled

```javascript
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
            options:props.options
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



IndecissionApp.defaultProps={
  options: []
};



export default IndecissionApp;

```


---


9.  In AddOption.js

```javascript
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)

        this.setState(()=>({error:error}));

        this.setState(()=>{
            return{
                error:error
            };
        });


        if(!error){
            e.target.elements.option.value='';
        }

    }


```


10. If empty array just print something
 
 **Before**

```javascript
import React from 'react';
import Option from './Option';
import Button from "reactstrap/es/Button";


const Options =(props)=>{

    return (
        <div>

            <Button onClick={props.handleDeleteOptions}>Remove AlL</Button>
            {props.options.map((option)=> (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}

        </div>
    );


};

export default Options;

```

 **After**
 
 
```javascript
       <div>

            <Button onClick={props.handleDeleteOptions}>Remove AlL</Button>

            {props.options.length===0 && <p>Please enter something</p>}

            {props.options.map((option)=> (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}

        </div>
 
```



### LocalStorage and lifecycle with Counter.js file
---

1. Within our Counter.js we have a number not a string
so we don't necessarily have to use JSON.stringify method.


2. **parseInt()** method converts string to number.

```javascript
3*"abc"
NaN
isNaN(4*3)
false
isNan(4*sfdkj)
VM597:1 Uncaught ReferenceError: isNan is not defined
    at <anonymous>:1:1
(anonymous) @ VM597:1
isNaN(4*3)
false
isNaN(4*sfdkj)
VM641:1 Uncaught ReferenceError: sfdkj is not defined
    at <anonymous>:1:9
(anonymous) @ VM641:1
isNaN(4*"sfdkj")
true
```




3. Now we aren't going to use props so set the options:[]
array empty and remove default props.   We will do the 
exact same thing for counter example.

> Every props passed will be overriden



```javascript

this.setState(){
    options:[]
}



IndecissionApp.defaultProps={
  options: []
};
```



4. 

 * Step 1: is save the count when it changes
 Use componentDidUpdate()
 
 
```javascript
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.count!==this.state.count){
            localStorage.setItem('count',this.state.count);
        }



        console.log('compooooi');

    }

```
 
 
 * Step 2: grab that within componentDidMount
 
 
```javascript


    componentDidMount() {
        const stringCount=localStorage.getItem('count');
        const count=parseInt(stringCount,10);

        if(!isNaN(count)){
            this.setState(()=>({count}));
        }

    }

```



---




# WebPack

---

1. **Source map with webpack**




---












---
