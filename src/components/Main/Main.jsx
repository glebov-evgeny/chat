
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Chat} from "../Chat/Chat"

function Main(props) {
  const { login } = props;

return (
  <main className="main">
    <Router> 
      <Switch> 
          {login ? (
             <Route path='/' component={Chat} exact />
          ) : (
            <button className="main__btn">Логин</button>
          )}
      </Switch>
    </Router>
  </main>
  )
}

export { Main };
