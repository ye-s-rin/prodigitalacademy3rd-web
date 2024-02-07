import React, { useState, useEffect } from "react";
import axios from 'axios';
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoColor from "./TodoColor";

export default function Todo() {
  let i = 0;
  const [color, setColor] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    readMongo();
  }, []);

  const readMongo = () => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/todo");
        let initTodo = [];
        for(const elem of response.data) {
          initTodo.push({
            id: elem._id,
            todo: elem.todo, 
            color: elem.color
          });
        };   
        setTodo(initTodo);
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
    console.log(todo);
  }

  const createTodo = (text, color) => {
    setTodo((prevArr) => [...prevArr, {todo: text, color: color}]);
    createMongo(text, color);
  };

  const createMongo = (todo, color) => {
    (async () => {
      try {
        await axios.post("http://localhost:3001/todo", 
        {todo: todo, color: color});
        readMongo();
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
  };

  const updateTodo = (idx, text, color) => {
    setTodo((prevArr) => {
      const newArr = [...prevArr];
      newArr[idx] = {todo: text, color: color};
      return (newArr);
    });
  };

  const deleteTodo = (idx) => {
    const id = todo[idx].id;

    setTodo((prevArr) => {
      const newArr = [...prevArr];
      newArr.splice(idx, 1);
      return (newArr);
    });
    deleteMongo(id);
  };

  const deleteMongo = (id) => {
    (async () => {
      try {
        await axios.delete("http://localhost:3001/todo", 
        {id: id});
        readMongo();
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
    console.log("deleted: ",todo);
  };

  const applyColor = (color) => {
    setColor((prevColor) => {
      if(prevColor!==color){
        return color;
      }
      else{
        return "";
      }
    });
  };

  return (
    <div>
      <TodoCreate createTodo={createTodo} color={color}/>
      <TodoColor applyColor={applyColor}/>
      <TodoList
        todo={todo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
