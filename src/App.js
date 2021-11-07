import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import video from "./files/video.mp4";

import { initializeApp } from "firebase/app";
/* инициализация firebase  */

import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
/* инициализация авторизации Google */

const firebase = initializeApp(
  {
    apiKey: "AIzaSyDpwhpepw1f31gclJpDwp0UeIEJnBCeFsk",
    authDomain: "chat-react-32af1.firebaseapp.com",
    projectId: "chat-react-32af1",
    storageBucket: "chat-react-32af1.appspot.com",
    messagingSenderId: "713769401807",
    appId: "1:713769401807:web:e98fab4abf5a46539566ba"
  }
);


function App() {
  const [login, setLogin] = useState(false);
  /* стэйт залогинен пользователь или нет */
  const [user, setUser] = useState([])
 /* стэйт информация о пользователе */


  /* start logIN / logOUT */
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handlerLogin = () => {
    
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      setLogin(true)
      setUser(user || [])

      console.log(user)
    }).catch((error) => {
      console.error(error)
    });
  }

  const handlerLoginOut = () => {
    signOut(auth).then(() => {
      setLogin(false)
    }).catch((error) => {
      console.error(error)
    });
  }

  /* end logIN / logOUT */

  return (
    <div className="app">
      <div className="app__video">
        <video loop muted autoPlay className="app__video-content">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="app__content">
        <Header handlerLogin={handlerLogin} login={login} handlerLoginOut={handlerLoginOut}/>
        <Main login={login} handlerLogin={handlerLogin} handlerLoginOut={handlerLoginOut} user={user} firebase={firebase}/>
      </div>
    </div>
  );
}

export default App;
