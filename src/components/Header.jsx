import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Website Heading</h1>
    </header>
  );
}

export default Header;