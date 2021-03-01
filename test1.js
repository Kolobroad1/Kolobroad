class Human { // Обьявление классв
    constructor(name, surname, age, gender) { // Конструктор обьекта Human
        this.name = new String(name);
        this.surname = new String(surname)
        this.age = new Number(age);
        this.gender = new String(gender);
        this.fullName = new String(this.name + ` ` + this.surname);
    }
}


class Coder extends Human { //Указываем что класс Coder наследует Human
    constructor(name, surname, age, gender, mood, fullName) { //конструктор Кодера
        super(name, surname, age, gender, fullName); //Указываем что используем в конструктор родителя Human(как суперкласс)
        this.mood = new String(mood); //Добавляем собсвтенное свойство к уже сделаным родителем полям
    }

};


class boozer extends Human { //Указываем что класс Бухарь наследует Human
    constructor(name, surname, age, gender, mood, fullName, Alcohol) { //конструктор Бухаря
        super(name, surname, age, gender, fullName); //Указываем что используем в конструктор родителя Human(как суперкласс)
        this.mood = new String(mood); //Добавляем собсвтенное свойство к уже сделаным родителем полям
        this.Alcohol = Alcohol;
    }
};


// Создаем Обьекты и выводим их в консоль
let Vasia = new boozer(`Vasia`, `Petrovich`, 55, `Male`, `"Пошел ты!"`);
Vasia.Alcohol = `Baltika 7`
let Rad = new Coder(`Radik`, `Shevch`, 22, `Male`, `"УИИИ работка оборудование"`);
let Serg = new Coder(`Sergey`, `Dybinsk`, 22, `Male`, `"Уииии работка тестирование!"`);


function introduce(Object) {
    return console.log(`Hello, my name is ${Object.fullName}, my age is ${Object.age}, and im ${Object.gender}, my mood is ${Object.mood} and im a ${Object.constructor.name}, my parental class is ${Object.constructor.__proto__.name}`)
}

introduce(Vasia);
introduce(Rad);
introduce(Serg);


// Конец
console.log(`end`)