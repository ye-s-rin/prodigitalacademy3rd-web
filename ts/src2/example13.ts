function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  console.log("Decorator 호출");
  console.log("type of constructor in decorator: " + typeof constructor);
  return class extends constructor {
    reportingURL = "http://www...";
  };
}
// new (...args: any[]) -> 생성자 함수를 의미

@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;
  constructor(t: string) {
    console.log(t + " in class");
    this.title = t;
  }
}

const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report
console.log("type of bug instance: " + typeof bug);
