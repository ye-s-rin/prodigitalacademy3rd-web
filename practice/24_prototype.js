// object

const animal1 = {
    name: "lion",
    run() {
        console.log(`${this.name} 동물이 달린다.`);
    },
    run2: function () {
        console.log("동물이 달려요.");
    },
};

// 만약 같은 형태의 (속성을 가진) 객체를 여러개 만들고 싶으면
// javascript는 생성자 함수
function Animal(name) {
    this.name = name;
    this.run = function () {
        console.log(`${this.name} 동물이 달린다.`);
    };
}

animal1.run();
animal1.run2();
const animal2 = new Animal("사자");
console.log(animal2);
console.log(animal2.constructor);
animal2.run();

Animal.prototype.eat = function () {
    console.log(`${this.name}가 먹는다.`);
};

animal2.eat();
console.log(animal2);
console.log(animal2.__proto__);

// javascript의 상속은 prototype
function Rabbit(name, color) {
    //arguments: 함수가 가지는 특수 변수, 이자를 나타내는 유사배열
    Animal.apply(this, arguments);
    // Animal 함수를 적용하되 context는 this(Rabbit)
    this.color = color;
}

// Object.create 함수는 객체는 만들되 생성장 실행X
Rabbit.prototype = Object.create(Animal.prototype);
// Animal { constructor: [Function: Rabbit] }
Rabbit.prototype.constructor = Rabbit;
// 생성자의 클래스의 생성자는 자기 자신

const rabbit1 = new Rabbit("토끼", "white");

rabbit1.run();
rabbit1.eat();

Rabbit.prototype = Object.assign(Rabbit.prototype, Animal.prototype);

console.log(rabbit1);
console.log(rabbit1.__proto__);
/**
> node .\24_prototype.js
lion 동물이 달린다.
동물이 달려요.
Animal { name: '사자', run: [Function (anonymous)] }
[Function: Animal]
사자 동물이 달린다.
사자가 먹는다.
Animal { name: '사자', run: [Function (anonymous)] }
{ eat: [Function (anonymous)] }
토끼 동물이 달린다.
토끼가 먹는다.
Rabbit { name: '토끼', run: [Function (anonymous)], color: 'white' }  
Animal { constructor: [Function: Rabbit], eat: [Function (anonymous)] }
 */
