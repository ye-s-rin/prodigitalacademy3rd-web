import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import CaptionImage from "./compoment/CaptionImage";
import Todo from "./compoment/Todo";

function App() {
  return (
    <div>
      {/* <CaptionImage
        imgUrl="https://th.bing.com/th/id/OIP.fq-NjU9SpzqC-Mdm5vwUDQHaE8?rs=1&pid=ImgDetMain"
        text="구름"
      /> */}
      <Todo />
    </div>
  );
}

export default App;
