import { useEffect } from "react";
import { useSettings } from "../context/SettingsContext";

function CountryModal({ country, onClose }) {
  const { text } = useSettings();

  useEffect(() => {
    if (country) {
      sessionStorage.setItem("sophiko-recent-country", country.name.common);
    }
  }, [country]);

  if (!country) return null;

  const languages = country.languages ? Object.values(country.languages).join(", ") : "-";
  const currency = country.currencies ? Object.values(country.currencies).map((item) => item.name).join(", ") : "-";

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="country-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        <img src={country.flags.svg} alt={country.name.common} />
        <h2>{country.name.common}</h2>
        <div className="modal-grid">
          <p><strong>{text.capital}:</strong> {country.capital?.[0] || "-"}</p>
          <p><strong>{text.region}:</strong> {country.region}</p>
          <p><strong>{text.population}:</strong> {country.population.toLocaleString()}</p>
          <p><strong>{text.area}:</strong> {country.area.toLocaleString()} km²</p>
          <p><strong>{text.languages}:</strong> {languages}</p>
          <p><strong>{text.currency}:</strong> {currency}</p>
        </div>
      </section>
    </div>
  );
}

export default CountryModal;
