interface ITodoItem {
  id: string | number;
  title: string;
  color: string;
}
interface IAdvancedTodoItem extends ITodoItem {
  completed: boolean;
  etc: string;
}

type TypeTodo = {
  id: string | number;
  title: string;
  color: string;
};
type IAdvancedTypeTodo = TypeTodo & {
  completed: boolean;
  etc: string;
};
