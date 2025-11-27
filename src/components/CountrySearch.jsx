import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const REGIONS = [
  { id: "Africa", label: "Africa", emoji: "🌍" },
  { id: "Americas", label: "Americas", emoji: "🌎" },
  { id: "Asia", label: "Asia", emoji: "🌏" },
  { id: "Europe", label: "Europe", emoji: "🇪🇺" },
  { id: "Oceania", label: "Oceania", emoji: "🌊" },
];

const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // search
  const [activeRegion, setActiveRegion] = useState(""); // Region filter

  // FETCH DATA

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca3,capital,region,flags,population,languages,currencies,latlng,capitalInfo"
        );
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setError("Could not load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleClear = () => {
    setSearchTerm("");
  };

  let displayedCountries = countries;

  // If searchTerm exists → filter by name
  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();
    displayedCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(term)
    );
  }

  // If searchTerm is empty → region filter applies
  else if (activeRegion) {
    displayedCountries = countries.filter((c) => c.region === activeRegion);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/*  SEARCH INPUT */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <input
          type="text"
          placeholder="Search for a country (e.g. Albania, Luxembourg)..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            // When searching, region filter should be ignored BUT not cleared
            // So we do nothing here — just let search override region
          }}
          className="flex-1 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="rounded-full bg-amber-300 px-6 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-amber-400 transition"
          >
            Clear
          </button>
        )}
      </div>

      {/* 🌍 REGION FILTER BUTTONS */}
      <div className="flex flex-wrap gap-2 mb-6">
        {REGIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveRegion(r.id)}
            className={
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition " +
              (activeRegion === r.id
                ? "bg-orange-100 border-orange-300 text-slate-900 shadow-sm"
                : "bg-white border-slate-200 text-slate-700 hover:bg-amber-50")
            }
          >
            {r.emoji} {r.label}
          </button>
        ))}
      </div>

      {/* LOADING / ERROR */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* RESULTS */}
      {!loading && !error && <CountryCard countries={displayedCountries} />}
    </section>
  );
};

export default CountrySearch;
