import { Link } from "react-router-dom";

const CountryCard = ({ countries, isDetails = false }) => {
  return (
    <ul
      className={
        isDetails
          ? "grid grid-cols-1 max-w-xl mx-auto gap-6"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      }
    >
      {countries.map((country) => {
        const languagesList = country.languages
          ? Object.values(country.languages).join(", ")
          : "N/A";

        const currenciesList = country.currencies
          ? Object.values(country.currencies)
              .map((cur) =>
                cur.symbol ? `${cur.name} (${cur.symbol})` : cur.name
              )
              .join(", ")
          : "N/A";

        return (
          <li
            key={country.cca3}
            className={
              "group bg-amber-50 border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 flex flex-col " +
              (isDetails ? "p-7" : "p-5")
            }
          >
            {/* Top: flag + basic info */}
            <div className="flex items-start gap-4 mb-4">
              {/* Flag */}
              <div className="w-24 h-16 rounded-xl overflow-hidden border border-amber-100 shadow-sm bg-white">
                <img
                  src={country.flags?.svg || country.flags?.png}
                  alt={`${country.name.common} flag`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name, code, capital */}
              <div className="space-y-1">
                <h2
                  className={
                    "font-semibold text-slate-800 " +
                    (isDetails ? "text-xl" : "text-lg")
                  }
                >
                  {country.name.common}
                </h2>
                <p className="text-sm text-slate-700">
                  <span className="font-medium">Code:</span> {country.cca3}
                </p>
                <p className="text-sm text-slate-700">
                  <span className="font-medium">Capital:</span>{" "}
                  {country.capital ? country.capital[0] : "N/A"}
                </p>
              </div>
            </div>

            {/* Extra info: population, languages, currency */}
            <div className="space-y-1 mb-3 text-sm text-slate-700">
              <p>
                <span className="font-medium">Population:</span>{" "}
                {country.population
                  ? country.population.toLocaleString()
                  : "N/A"}
              </p>
              <p>
                <span className="font-medium">Language:</span> {languagesList}
              </p>
              <p>
                <span className="font-medium">Currency:</span> {currenciesList}
              </p>
            </div>

            {/* Region + button */}
            <div className="mt-auto flex items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700">
                🌍 {country.region || "Unknown region"}
              </span>

              {/* Hide the “View details” button in details mode */}
              {!isDetails && (
                <Link to={`/details/${country.cca3}`} state={{ country }}>
                  <button className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-sm hover:bg-orange-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-200/70 focus:ring-offset-1 transition">
                    View details
                    <span className="text-sm">➜</span>
                  </button>
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CountryCard;
