class Animal {
    constructor(name = "lion") {
        this.name = name;
    }
    run() {
        console.log(`${this.name} 동물이 달린다.`);
    }
    eat() {
        console.log(`${this.name}가 먹는다.`);
    }
}

class Rabbit extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    newFunction() {
        console.log(`${this.name}가 새로운 기능을 가졌다!`);
    }
}

const rabbit1 = new Rabbit("토끼", "white");
console.log(rabbit1);
rabbit1.run();
rabbit1.newFunction();
