import logo from '../static/images/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <p>Disputas</p>
    </header>
  );
}

export default Header;
