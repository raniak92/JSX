import logo from "./logo.svg";
import "./App.css";
import Img1 from "./img1.jpg";
import Style from "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "4100vw" }}>
        <h1 className="title-red">Rania khattab</h1>

        <br />

        <img src={Img1} alt="" />

        <br />

        <img src="/img.jpg" alt="" />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
