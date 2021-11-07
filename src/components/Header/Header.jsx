function Header(props) {
  const { login } = props;

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
            <button className="header__btn">Выйти</button>
          ) : (
            <button className="header__btn">Логин</button>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header };
