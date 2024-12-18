class Prum {
    constructor(name,age) {
        this=name;
        this=age;
    }
    greet(){
     console.log(`私の名前は、${this.name}私は、${this.age} years old`);
    }   
}
let person1 = new Person('竹村', 20);
let person2 = new Person('山本',21);

person1.greet();
person2.greet();
