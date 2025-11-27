// RegionBrowser.jsx
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const REGIONS = [
  { id: "", label: "All", emoji: "🌐" },
  { id: "Africa", label: "Africa", emoji: "🌍" },
  { id: "Americas", label: "Americas", emoji: "🌎" },
  { id: "Asia", label: "Asia", emoji: "🌏" },
  { id: "Europe", label: "Europe", emoji: "🇪🇺" },
  { id: "Oceania", label: "Oceania", emoji: "🌊" },
];

const RegionBrowser = () => {
  const [countries, setCountries] = useState([]);
  const [activeRegion, setActiveRegion] = useState(""); // "" = All
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca3,capital,region,flags,population,languages,currencies,latlng,capitalInfo"
        );
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setError(err.message || "Failed to load countries");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = activeRegion
    ? countries.filter((c) => c.region === activeRegion)
    : countries;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-2 text-slate-900">
        Explore countries by region
      </h2>
      <p className="text-sm text-slate-600 mb-4">
        Click a region to see the countries in that part of the world.
      </p>

      {/* Row of rounded buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {REGIONS.map((region) => {
          const isActive = activeRegion === region.id;
          return (
            <button
              key={region.id || "all"}
              onClick={() => setActiveRegion(region.id)}
              className={
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition " +
                (isActive
                  ? "bg-orange-100 border-orange-300 text-slate-900 shadow-sm"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-amber-50")
              }
            >
              <span>{region.emoji}</span>
              <span>{region.label}</span>
            </button>
          );
        })}
      </div>

      {loading && <p className="text-slate-700">Loading countries…</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <>
          {filteredCountries.length === 0 ? (
            <p className="text-sm text-slate-600">
              No countries found for this region.
            </p>
          ) : (
            <CountryCard countries={filteredCountries} />
          )}
        </>
      )}
    </section>
  );
};

export default RegionBrowser;
