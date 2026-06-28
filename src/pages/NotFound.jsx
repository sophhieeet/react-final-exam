import { Link } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";

function NotFound() {
  const { text } = useSettings();

  return (
    <section className="not-found page-enter">
      <h1>404</h1>
      <p>{text.notFound}</p>
      <Link className="main-button" to="/">{text.home}</Link>
    </section>
  );
}

export default NotFound;
