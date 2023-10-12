import DarkthemeIcon from "../images/icon-sun.svg";
import LightthemeIcon from "../images/icon-moon.svg";

type Props={
  isDarkTheme:boolean,
  toggleTheme:()=>void
}

const Header:React.FC<Props> = ({ isDarkTheme, toggleTheme })=> {
  return (
    <header className={isDarkTheme ? "header" : "header light"}>
      <div className="title-theme-div">
        <h1 className="title">Todo</h1>
        <div className="theme-switcher">
          <img
            onClick={toggleTheme}
            src={isDarkTheme ? DarkthemeIcon : LightthemeIcon}
            alt={isDarkTheme ? "Sun" : "moon"}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
