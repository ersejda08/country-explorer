// CountryDetails.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CountryDetails = () => {
  const { cca3 } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // If we came from CountryCard, we already have the country
  const [country, setCountry] = useState(state?.country || null);
  const [loading, setLoading] = useState(!state?.country);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If we don't have a country in state, fetch it by cca3
    if (!country) {
      const fetchCountry = async () => {
        try {
          setLoading(true);
          setError(null);
          const res = await fetch(
            `https://restcountries.com/v3.1/alpha/${cca3}?fields=name,cca3,capital,region,flags,population,languages,currencies,subregion,area`
          );
          const data = await res.json();

          if (!Array.isArray(data) || !data[0]) {
            throw new Error("Country not found");
          }

          setCountry(data[0]);
        } catch (err) {
          setError(err.message || "Failed to load country");
        } finally {
          setLoading(false);
        }
      };

      fetchCountry();
    }
  }, [cca3, country]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <p className="text-white text-lg">Loading country details…</p>
      </div>
    );
  }

  if (error || !country) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
        <p className="mb-4 text-lg">Oops: {error || "Country not found"}</p>
        <button
          onClick={() => navigate(-1)}
          className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-orange-200"
        >
          ← Go back
        </button>
      </div>
    );
  }

  // Build readable lists
  const languagesList = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currenciesList = country.currencies
    ? Object.values(country.currencies)
        .map((cur) => (cur.symbol ? `${cur.name} (${cur.symbol})` : cur.name))
        .join(", ")
    : "N/A";

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-1 rounded-full bg-slate-800 px-4 py-1.5 text-sm font-medium hover:bg-slate-700"
        >
          ← Back
        </button>

        <div className="bg-amber-50 text-slate-800 rounded-3xl shadow-md p-6 sm:p-8 flex flex-col md:flex-row gap-8">
          {/* Flag */}
          <div className="md:w-1/3 flex items-start justify-center">
            <div className="w-48 h-32 rounded-2xl overflow-hidden border border-amber-100 shadow-sm bg-white">
              <img
                src={country.flags?.svg || country.flags?.png}
                alt={`${country.name.common} flag`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:w-2/3 space-y-3">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              {country.name.common}
              <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700">
                🌍 {country.region || "Unknown region"}
              </span>
            </h1>
            {country.name.official && (
              <p className="text-sm text-slate-700">
                <span className="font-medium">Official name:</span>{" "}
                {country.name.official}
              </p>
            )}

            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <p>
                <span className="font-medium">Code (CCA3):</span> {country.cca3}
              </p>
              <p>
                <span className="font-medium">Capital:</span>{" "}
                {country.capital ? country.capital[0] : "N/A"}
              </p>
              <p>
                <span className="font-medium">Population:</span>{" "}
                {country.population
                  ? country.population.toLocaleString()
                  : "N/A"}
              </p>
              <p>
                <span className="font-medium">Subregion:</span>{" "}
                {country.subregion || "N/A"}
              </p>
              <p>
                <span className="font-medium">Area:</span>{" "}
                {country.area ? `${country.area.toLocaleString()} km²` : "N/A"}
              </p>
              <p>
                <span className="font-medium">Languages:</span> {languagesList}
              </p>
              <p className="sm:col-span-2">
                <span className="font-medium">Currencies:</span>{" "}
                {currenciesList}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
