import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
       Movies and Series Here....
    </span>
  );
};

export default Header;
