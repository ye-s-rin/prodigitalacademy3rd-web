import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CaptionImage from "./compoment/CaptionImage";

function App() {
  return (
    <div className="App">
      <CaptionImage
        imgUrl="https://www.bing.com/images/search?view=detailV2&ccid=fq%2bNjU9S&id=21E8F7DF61289D23A51ACD7908BCFC3CB7FA3F4B&thid=OIP.fq-NjU9SpzqC-Mdm5vwUDQHaE8&mediaurl=https%3a%2f%2fget.pxhere.com%2fphoto%2fcloud-sky-atmosphere-daytime-cumulus-clouds-thunderstorm-clouds-form-cumulus-clouds-meteorological-phenomenon-cloud-mountain-cloud-of-bunch-of-atmosphere-of-earth-591971.jpg&exph=3456&expw=5184&q=%ea%b5%ac%eb%a6%84&simid=607996430079832824&FORM=IRPRST&ck=83984CC0FE0CF7D9C67AD30649DDC353&selectedIndex=0&itb=0"
        text="구름"
      />
    </div>
  );
}

export default App;
