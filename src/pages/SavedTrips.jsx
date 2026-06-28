import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import CountryModal from "../components/CountryModal";
import { useSettings } from "../context/SettingsContext";

function SavedTrips() {
  const { text, savedCountries, clearSavedCountries } = useSettings();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [recentCountry, setRecentCountry] = useState("");

  useEffect(() => {
    setRecentCountry(sessionStorage.getItem("sophiko-recent-country") || "-");
  }, []);

  return (
    <section className="saved-page page-enter">
      <div className="page-heading compact-heading">
        <div>
          <h1>{text.savedTitle}</h1>
          <p className="recent-note">{text.recent}: {recentCountry}</p>
        </div>

        {savedCountries.length > 0 && (
          <button className="secondary-button" onClick={clearSavedCountries}>{text.clearAll}</button>
        )}
      </div>

      {savedCountries.length === 0 ? (
        <div className="empty-state">{text.emptySaved}</div>
      ) : (
        <div className="country-grid">
          {savedCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} onDetails={setSelectedCountry} />
          ))}
        </div>
      )}

      <CountryModal country={selectedCountry} onClose={() => setSelectedCountry(null)} />
    </section>
  );
}

export default SavedTrips;
