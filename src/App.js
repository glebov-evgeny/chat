import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import video from "./files/video.mp4";

function App() {
  const [login, setLogin] = useState(true);

  return (
    <div className="app">
      <div className="app__video">
        <video loop muted autoPlay className="app__video-content">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="app__content">
        <Header login={login} />
        <Main login={login} />
      </div>
    </div>
  );
}

export default App;
