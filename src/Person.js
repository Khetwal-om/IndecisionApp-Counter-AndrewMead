


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

        return 'from student'+super.getDescription();
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

