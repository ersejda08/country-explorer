const CountryCard = ({ countries }) => {
  return (
    <ul className="space-y-4">
      {countries.map((country) => (
        <li
          key={country.cca3}
          className="p-4 bg-slate-800 rounded-lg text-white shadow flex gap-4 items-start"
        >
          {/* Flag */}
          <img
            src={country.flags?.svg || country.flags?.png}
            alt={`${country.name.common} flag`}
            className="w-20 h-14 object-cover rounded border border-slate-600"
          />

          {/* Text content */}
          <div>
            <h2 className="text-xl font-bold">{country.name.common}</h2>
            <p>
              <span className="font-semibold">Code:</span> {country.cca3}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p>
              <span className="font-semibold">Capital:</span>{" "}
              {country.capital ? country.capital[0] : "N/A"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default CountryCard;
