import { useEffect, useMemo, useState } from "react";
import { getCountries } from "../api/countriesApi";
import CountryCard from "../components/CountryCard";
import CountryModal from "../components/CountryModal";
import SearchBox from "../components/SearchBox";
import { useSettings } from "../context/SettingsContext";

function Destinations() {
  const { text } = useSettings();
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountries()
      .then((data) => {
        const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedCountries.slice(0, 48));
      })
      .catch(() => setCountries([]))
      .finally(() => setLoading(false));
  }, []);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.trim().toLowerCase())
    );
  }, [countries, query]);

  return (
    <section className="catalogue-page page-enter">
      <div className="page-heading">
        <h1>{text.pageDestinations}</h1>
        <SearchBox value={query} onChange={setQuery} placeholder={text.search} />
      </div>

      {loading && <p className="state-message">{text.loading}</p>}

      <div className="country-grid">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} onDetails={setSelectedCountry} />
        ))}
      </div>

      <CountryModal country={selectedCountry} onClose={() => setSelectedCountry(null)} />
    </section>
  );
}

export default Destinations;
