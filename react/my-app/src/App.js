import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import CaptionImage from "./components/CaptionImage";

function App() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      <CaptionImage
        imgUrl="https://th.bing.com/th/id/OIP.5Lj5hT2kFPf-9-R-sJGP8QHaFj?rs=1&pid=ImgDetMain"
        caption="구름 그림"
      />
    </div>
  );
}
export default App;
