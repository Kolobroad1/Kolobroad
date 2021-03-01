class Human { // Обьявление классв
    constructor(name, surname, age, gender) { // Конструктор обьекта Human
        this.name = new String(name);
        this.surname = new String(surname)
        this.age = new Number(age);
        this.gender = new String(gender);
    }
}

class Coder extends Human { //Указываем что класс Coder наследует Human
    constructor(name, surname, age, gender, mood) { //конструктор Кодера
        super(name, surname, age, gender); //Указываем что используем в конструктор родителя Human(как суперкласс)
        this.mood = new String(mood); //Добавляем собсвтенное свойство к уже сделаным родителем полям
    }
    get fullName() { // Достаем полное имя
        return this.name + ` ` + this.surname;
    }

};

// Создаем Обьекты и выводим их в консоль
let boozer = new Human(`Radik`, `Shevch`, 22, `Male`, `IndRabotka`);
let Rad = new Coder(`Radik`, `Shevch`, 22, `Male`, `IndRabotka`);
let Serg = new Coder(`Sergey`, `Dybinsk`, 22, `Male`, `UbiRabotka`);

console.log(`hey,${boozer.name}, ${boozer.age}, ${boozer.gender}, youre a ${boozer.constructor.name}`);
console.log(`Hello, my name is ${Rad.fullName}, my age is ${Rad.age}, and im ${Rad.gender},my mood is ${Rad.mood} and im a ${Rad.constructor.name},my parental class is ${Rad.constructor.__proto__.name}`) // В конце строки вызываем имя родительского класса Human из класса Coder;
console.log(`Hello, my name is ${Serg.fullName}, my age is ${Serg.age}, and im ${Serg.gender},my mood is ${Serg.mood} and im a ${Serg.constructor.name},my parental class is ${Rad.constructor.__proto__.name}`);
console.log(Serg);
// Конец
console.log(`end`)