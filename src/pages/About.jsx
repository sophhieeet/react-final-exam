import { useSettings } from "../context/SettingsContext";

function About() {
  const { text } = useSettings();

  return (
    <section className="about-page page-enter">
      <div className="about-card">
        <p className="eyebrow">Final Assignment</p>
        <h1>{text.aboutTitle}</h1>
        <p>{text.aboutText}</p>

        <ul>
          <li>React Functional Components</li>
          <li>React Hooks: useState, useEffect, useMemo, useContext</li>
          <li>React Router navigation</li>
          <li>Axios API integration</li>
          <li>LocalStorage and SessionStorage</li>
          <li>SCSS responsive interface</li>
          <li>Modal window and page animations</li>
          <li>Dark / Light mode</li>
          <li>Georgian / English language switcher</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
