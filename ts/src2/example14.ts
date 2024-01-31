function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    descriptor.enumerable = value;
  };
}

function sample(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
  descriptor.enumerable = false;
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  // @enumerable(true)

  // @sample
  @enumerable(true)
  greet() {
    return "Hello, " + this.greeting;
  }
}
const greet = new Greeter("World");
// console.log(greet.greet());

for (let p in greet) {
  console.log(p + " type: " + typeof p);
}
