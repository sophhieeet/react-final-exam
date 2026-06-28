import { useSettings } from "../context/SettingsContext";

function CountryCard({ country, onDetails }) {
  const { text, isSaved, toggleSavedCountry } = useSettings();
  const saved = isSaved(country.cca3);

  return (
    <article className="country-card">
      <img src={country.flags.svg} alt={country.flags.alt || country.name.common} />

      <div className="country-content">
        <h3>{country.name.common}</h3>
        <p>{text.region}: {country.region}</p>
        <p>{text.capital}: {country.capital?.[0] || "-"}</p>
        <p>{text.population}: {country.population.toLocaleString()}</p>
      </div>

      <div className="country-actions">
        <button onClick={() => onDetails(country)}>{text.details}</button>
        <button className="secondary-button" onClick={() => toggleSavedCountry(country)}>
          {saved ? text.remove : text.add}
        </button>
      </div>
    </article>
  );
}

export default CountryCard;
