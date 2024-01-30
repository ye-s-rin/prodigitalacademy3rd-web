interface Greet {
  (name: string, greeting?: string): string;
}

const greet3: Greet = (name, greeting) => {
  return `${greeting || "Hello"}, ${name}`;
};
console.log(greet3("YS"));
// module.exports = {};
