import { NavLink } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";

function Navigation() {
  const { text, theme, language, toggleTheme, toggleLanguage } = useSettings();

  return (
    <header className="navigation">
      <NavLink className="logo" to="/" aria-label="Go to home page">
        <span>S</span>
        {text.brand}
      </NavLink>

      <nav className="menu">
        <NavLink to="/">{text.home}</NavLink>
        <NavLink to="/destinations">{text.destinations}</NavLink>
        <NavLink to="/saved">{text.saved}</NavLink>
        <NavLink to="/about">{text.about}</NavLink>
      </nav>

      <div className="toolbar">
        <button className="ghost-button" onClick={toggleLanguage}>{language === "ka" ? "EN" : "KA"}</button>
        <button className="ghost-button" onClick={toggleTheme}>{theme === "dark" ? "Light" : "Dark"}</button>
      </div>
    </header>
  );
}

export default Navigation;
