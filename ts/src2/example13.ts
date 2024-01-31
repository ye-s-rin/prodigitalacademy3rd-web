function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  console.log("Decorator 호출"); // 클래스 선언시 딱 한번
  console.log("type of constructor in decorator: " + typeof constructor);

  constructor.prototype.sample = function () {
    console.log("injected method");
  };

  return class extends constructor {
    reportingURL = "http://www...";
  };
}
// new (...args: any[]) -> 생성자 함수를 의미

@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;
  reportingURL: string | undefined;
  sample() {
    throw new Error("Should be implemented");
  }

  constructor(t: string) {
    console.log(t + " in class");
    this.title = t;
  }
}

console.log("\n");
const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"
console.log(bug.reportingURL); // Prints "http://www..."

console.log("\ntype of bug instance: " + typeof bug);
const bug2 = new BugReport("Needs light mode");
console.log("BugReport class: " + BugReport);
/**
 BugReport class: function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.reportingURL = "http://www...";
            return _this;
        }
 */
