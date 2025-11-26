import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountrySearch = () => {
  const [countries, setCountries] = useState([]); // all countries
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // what the user types

  // Fetch countries once
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca3,capital,region,flags,population,languages,currencies,subregion,area,timezones,startOfWeek,latlng,capitalInfo,maps"
        );

        const result = await response.json();
        setCountries(result);
      } catch (err) {
        console.error(err);
        setError("Could not load country data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Live filtered list – updates as the user types
  const filteredCountries = countries.filter((country) => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return true; // if empty → show all countries

    return country.name.common.toLowerCase().includes(term);
  });

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      {/* Intro text */}
      <div className="max-w-2xl mb-4">
        <h2 className="text-xl font-semibold text-slate-800 mb-1">
          Start your journey
        </h2>
        <p className="text-slate-700 text-sm"></p>
      </div>

      {/* Search input + clear button */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <input
          type="text"
          placeholder="Search for a country (e.g. Albania, Luxembourg)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* Loading / error / results */}
      {loading && <p className="text-slate-700">Loading countries...</p>}

      {error && !loading && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}

      {!loading && !error && (
        <>
          <p className="mb-3 text-sm text-slate-600">
            {filteredCountries.length} country
            {filteredCountries.length !== 1 && "ies"} found
            {searchTerm && (
              <>
                {" "}
                for <span className="font-semibold">"{searchTerm}"</span>
              </>
            )}
            .
          </p>

          {filteredCountries.length === 0 ? (
            <p className="text-slate-700">
              No matches found. Try another spelling or clear the search box.
            </p>
          ) : (
            <CountryCard countries={filteredCountries} />
          )}
        </>
      )}
    </section>
  );
};

export default CountrySearch;
