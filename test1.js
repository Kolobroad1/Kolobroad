class Human { // Обьявление классв
    constructor(name, surname, age, gender) { // Конструктор обьекта Human
        this.name = new String(name);
        this.surname = new String(surname)
        this.age = new Number(age);
        this.gender = new String(gender);
        this.fullName = new String(this.name + ` ` + this.surname);
    }
    introduce() { //метод Представиться
        return `Hello, my name is ${this.fullName}, my age is ${this.age}, and im ${this.gender}, my mood is ${this.mood} and im a ${this.constructor.name}, my parental class is ${this.constructor.__proto__.name}\n`
    }
}


class Coder extends Human { //Указываем что класс Coder наследует Human
    constructor(name, surname, age, gender, mood, fullName, introduce) { //конструктор Кодера
        super(name, surname, age, gender, fullName, introduce); //Указываем что используем в конструктор родителя Human(как суперкласс)
        this.mood = new String(mood); //Добавляем собсвтенное свойство к уже сделаным родителем полям
    }

};


class boozer extends Human { //Указываем что класс Бухарь наследует Human
    constructor(name, surname, age, gender, mood, Alcohol, fullName, introduce) { //конструктор Бухаря
        super(name, surname, age, gender, fullName, introduce); //Указываем что используем в конструктор родителя Human(как суперкласс)
        this.mood = new String(mood); //Добавляем собсвтенное свойство к уже сделаным родителем полям
        this.Alcohol = Alcohol;
        this.introduce = function() { //полиморфизм, мы наследуем родительский метод и меняем его содержимое
            return `Hello, my name is ${this.fullName}, my age is ${this.age}, and im ${this.gender}, my mood is ${this.mood} and im a ${this.constructor.name}, my parental class is ${this.constructor.__proto__.name}, also i love a ${this.Alcohol}\n`
        }
    }
};


// Создаем Обьекты и выводим их в консоль
let Vasia = new boozer(`Vasia`, `Petrovich`, 55, `Male`, `"Пошел ты!"`, "Becherovka");
let Rad = new Coder(`Radik`, `Shevch`, 22, `Male`, `"УИИИ работка оборудование"`);
let Serg = new Coder(`Sergey`, `Dybinsk`, 22, `Male`, `"Уииии работка тестирование!"`);



console.log(Vasia.introduce());
console.log(Rad.introduce());
console.log(Serg.introduce());


// Конец
console.log(`end`)