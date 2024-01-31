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
interface ITodoItem {
  id: string | number;
  title: string;
  color: string;
}

// type TodoList = Array<ITodoItem>;
type TodoList = ITodoItem[] | null;

const [todoList, setTodoList] = useState < TodoList > {
  []
};
todoList?.map((elem, idx)=>{
  return elem.color
})
setTodoList([{
  id: 10,
  title: 'todo',
  color: 'black',
}])