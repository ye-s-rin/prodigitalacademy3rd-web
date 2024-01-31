function identity<T>(arg: T): T {
  return arg;
}

identity(10);

function useState<T>(arg: T): [T, (arg: T) => void] {
  return [arg, (arg2) => {}];
}

const [count, setCount] = useState<number>(0);

const a: number[] = [1, 2, 3];
const b: Array<number | string> = [1, 2, 3, "a", "b"];

// useState<TodoList>(0);
// TodoList에 들어갈 타입을 정의하시오.
type TodoList = [
  {
    id: number;
    title: string;
    color: number;
  }
];
interface ITodoList {
  id: number;
  title: string;
  color: number;
}

interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;
