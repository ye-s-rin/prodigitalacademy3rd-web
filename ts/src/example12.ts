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

/**
interface만 extends(상속)와 implements(구현) 가능
typeScript에서 interface의 역할
1. 타입 지정 2. 추상클래스
 */
