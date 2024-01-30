function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}`;
}

function greet2(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

console.log(greet("이름"));
console.log(greet("이름", "반가워"));
