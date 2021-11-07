
function Header(props) {
  const {
    handlerLogin = Function.prototype, 
    handlerLoginOut = Function.prototype,
    login
  } = props

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__decoration">
          <div className="header__circle"></div>
          <div className="header__circle"></div>
          <div className="header__circle"></div>
        </div>
        <div className="header__nav">
          {login ? (
            <button className="header__btn" onClick={handlerLoginOut}>Выйти</button>
          ) : (
            <button className="header__btn" onClick={handlerLogin}>Логин</button>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header };
