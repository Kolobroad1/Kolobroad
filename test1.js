class Human {
    constructor(name, surname, age, gender) {
        this.name = new String(name);
        this.surname = new String(surname)
        this.age = new Number(age);
        this.gender = new String(gender);
    }
}

class Coder extends Human {
    constructor(name, surname, age, gender, mood) {
        super(name, surname, age, gender);
        this.mood = mood;
    }
    get fullName() {
        return this.name + ` ` + this.surname;
    }

};


let boozer = new Human(`Radik`, `Shevch`, 22, `Male`, `IndRabotka`);
let Rad = new Coder(`Radik`, `Shevch`, 22, `Male`, `IndRabotka`);
let Serg = new Coder(`Sergey`, `Dybinsk`, 22, `Male`, `UbiRabotka`);

console.log(`hey,${boozer.name}, ${boozer.age}, ${boozer.gender}, youre a ${boozer.constructor.name}`);
console.log(`Hello, my name is ${Rad.fullName}, my age is ${Rad.age}, and im ${Rad.gender},my mood is ${Rad.mood} and im a ${Rad.constructor.name}`);
console.log(`Hello, my name is ${Serg.fullName}, my age is ${Serg.age}, and im ${Serg.gender},my mood is ${Serg.mood} and im a ${Serg.constructor.name}`);
console.log(Serg);

console.log(`end`)