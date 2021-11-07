
import {Chat} from "../Chat/Chat"

function Main(props) {
  const {
    handlerLogin = Function.prototype,
    login,
    user,
    firebase
  } = props;

return (
  <main className="main">
    {login ? (
        <Chat user={user}/>
    ) : (
      <button className="main__btn" onClick={handlerLogin}>Логин</button>
    )}
  </main>
  )
}

export { Main };
