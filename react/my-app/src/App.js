// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import HelloWorld from "./components/HelloWorld";
import CaptionImage from "./components/CaptionImage";
import BlinkComponent from "./components/BlinkComponent";
import CountComponent from "./components/CountComponent";
import RegisterInputButton from "./components/RegisterInputButton";
import Todo from "./components/Todo";
import PrimeCalculator from "./components/PrimeCalculator";
import { ThemeProvider } from "./components/ThemeProvider";
import MyPage from "./components/MyPage";
import ThemeButton from "./components/ThemeButton";
import Board from "./components/Board";
import MongoBoard from "./components/MongoBoard";

function App() {
  const [visible, setVisible] = React.useState(true);

  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <CaptionImage
        imgUrl="https://th.bing.com/th/id/OIP.5Lj5hT2kFPf-9-R-sJGP8QHaFj?rs=1&pid=ImgDetMain"
        caption="구름 그림"
      /> */}
      {/* <CaptionImage
        imgUrl="https://www-trucknbus.hyundai.com/kr/upload/metadata/MT00000053/newpowertruck-facebook.jpg"
        caption="이건 트럭입니다."
      /> */}
      {/* <BlinkComponent text="BlinkComponent" /> */}
      {/* <button onClick={() => setVisible(!visible)}>클릭</button>
      {visible ? <CountComponent /> : null} */}
      {/* <RegisterInputButton /> */}
      {/* <PrimeCalculator /> */}
      {/* <ThemeProvider>
        <ThemeButton />
        <MyPage />
      </ThemeProvider> */}
      <Todo />
      {/* <Board /> */}
      {/* < MongoBoard/> */}
    </div>
  );
}
export default App;
