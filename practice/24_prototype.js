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
 */
