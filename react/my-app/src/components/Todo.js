import React, { useState, useEffect } from "react";
import axios from 'axios';
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoColor from "./TodoColor";
import TodoSearch from "./TodoSearch";
import TodoLogin from "./TodoLogin";

export default function Todo() {
  let i = 0;
  const [color, setColor] = useState("");
  const [todo, setTodo] = useState([]);
  const [display, setDisplay] = useState("none");

  const readMongo = async () => {
        await axios.get("http://localhost:3001/todo", { withCredentials: true })
        .then((response) => {
          let initTodo = [];
          for(const elem of response.data) {
            initTodo.push({
            id: elem._id,
            todo: elem.todo, 
            color: elem.color
            });
          };
          setTodo(initTodo);
        })
        .catch((err) => console.log(err));
    console.log(todo);
  }

  const createTodo = (text, color) => {
    setTodo((prevArr) => [...prevArr, {todo: text, color: color}]);
    createMongo(text, color);
  };

  const createMongo = async (todo, color) => {
    await axios.post("http://localhost:3001/todo", {todo: todo, color: color})
    .then(readMongo())
    .catch((err) => console.log(err));
  };

  const updateTodo = (idx, text, color) => {
    setTodo((prevArr) => {
      const newArr = [...prevArr];
      newArr[idx] = {todo: text, color: color};
      return (newArr);
    });
    updateMongo(todo[idx].id, text, color);
  };

  const updateMongo = async (id, todo, color) => {
    await axios.put("http://localhost:3001/todo", {id: id, todo: todo, color: color})
    .then(readMongo())
    .catch((err) => console.log(err));
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

  const deleteMongo = async (id) => {
    await axios.delete("http://localhost:3001/todo", {data: {id: id}})
    .then(readMongo())
    .catch((err) => console.log(err));
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

  const searchEqual = async (text) => {
    await axios.get(`http://localhost:3001/todo/${text}`)
    .then((response) => {
      let initTodo = [];
      for(const elem of response.data) {
        initTodo.push({
          id: elem._id,
          todo: elem.todo, 
          color: elem.color
        });
      };   
      setTodo(initTodo);
    })
    .catch((err) => console.log(err));
  };

  const login = async (id, pw, next) => {
    await axios.post("http://localhost:3001/users/login", 
      { email: id, password: pw }, { withCredentials: true } ) // 이 옵션을 통해 쿠키를 요청에 포함)
    .then((response) => {
        readMongo();
        setDisplay("");
    })
    .catch((err) => {
        console.log("login fail");
        next(err);
    });
  };

  return (
    <div>
      <TodoLogin login={login}/>
      <div style={{display: display}}>
        <TodoSearch 
          readMongo={readMongo}
          searchEqual={searchEqual}/>
        <TodoCreate createTodo={createTodo} color={color}/>
        <TodoColor applyColor={applyColor}/>
        <TodoList
          todo={todo}
          color={color}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
