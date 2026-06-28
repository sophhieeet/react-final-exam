import { Link } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import { useSettings } from "../context/SettingsContext";

function Home() {
  const { text } = useSettings();

  return (
    <section className="home-page page-enter">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">React · API · SCSS</p>
          <h1>{text.heroTitle}</h1>
          <p>{text.heroText}</p>
          <Link className="main-button" to="/destinations">{text.explore}</Link>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <span className="planet"></span>
          <span className="path"></span>
          <span className="pin">✦</span>
        </div>
      </div>

      <h2 className="section-title">{text.highlights}</h2>
      <div className="info-grid">
        <InfoCard number="01" title={text.apiTitle} text={text.apiText} />
        <InfoCard number="02" title={text.saveTitle} text={text.saveText} />
        <InfoCard number="03" title={text.themeTitle} text={text.themeText} />
      </div>
    </section>
  );
}

export default Home;
