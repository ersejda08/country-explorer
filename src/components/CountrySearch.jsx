import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountrySearch = () => {
  const [data, setData] = useState([]); // all countries
  const [filtered, setFiltered] = useState([]); // filtered countries
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca3,capital,region,flags"
        );
        const result = await response.json();
        setData(result);
        setFiltered(result); // show all by default
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const term = searchTerm.toLowerCase().trim();

    if (!term) {
      setFiltered(data); // reset to all countries
      return;
    }

    const filteredCountries = data.filter((country) =>
      country.name.common.toLowerCase().includes(term)
    );

    setFiltered(filteredCountries);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      {/* Intro text */}
      <div className="max-w-2xl mb-4">
        <h2 className="text-2xl font-semibold text-slate-800 mb-1">
          Start your journey
        </h2>
        <p className="text-slate-700 text-sm">
          Search for a country you love or explore the cards below to discover
          new corners of the world.
        </p>
      </div>

      {/* Search bar */}
      <form
        onSubmit={handleSearch}
        className="mb-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
      >
        <input
          type="text"
          placeholder="Search for a country (e.g. Italy, Japan)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
        <button
          type="submit"
          className="rounded-full bg-amber-300 px-6 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-amber-400 transition"
        >
          Search
        </button>
      </form>

      {/* Loading / results */}
      {loading ? (
        <p className="text-slate-700">Loading countries...</p>
      ) : (
        <>
          <p className="mb-3 text-sm text-slate-600">
            {filtered.length} country
            {filtered.length !== 1 && "ies"} found
            {searchTerm && (
              <>
                {" "}
                for <span className="font-semibold">"{searchTerm}"</span>
              </>
            )}
            .
          </p>

          {filtered.length === 0 ? (
            <p className="text-slate-700">
              No matches found. Try another spelling or clear the search box.
            </p>
          ) : (
            <CountryCard countries={filtered} />
          )}
        </>
      )}
    </section>
  );
};

export default CountrySearch;
