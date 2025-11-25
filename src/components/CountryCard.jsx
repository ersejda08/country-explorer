import { Link } from "react-router-dom";

const CountryCard = ({ countries }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {countries.map((country) => (
        <li
          key={country.cca3}
          className="group bg-amber-50 border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 p-5 flex flex-col"
        >
          {/* Top: flag + basic info */}
          <div className="flex items-start gap-4 mb-4">
            {/* Flag */}
            <div className="w-20 h-14 rounded-xl overflow-hidden border border-amber-100 shadow-sm bg-white">
              <img
                src={country.flags?.svg || country.flags?.png}
                alt={`${country.name.common} flag`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text content */}
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-slate-800">
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

          {/* Bottom: region + button */}
          <div className="mt-auto flex items-center justify-between gap-2">
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700">
              🌍 {country.region || "Unknown region"}
            </span>

            <Link to={`/country/${country.cca3}`}>
              <button className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-sm hover:bg-amber-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-300/70 focus:ring-offset-1 focus:ring-offset-amber-50 transition">
                View details
                <span className="text-sm">➜</span>
              </button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CountryCard;
