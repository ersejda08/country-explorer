// CountryDetails.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CountryCard from "./CountryCard";

const CountryDetails = () => {
  const { cca3 } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [country, setCountry] = useState(state?.country || null);
  const [loading, setLoading] = useState(!state?.country);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!country) {
      const fetchCountry = async () => {
        try {
          setLoading(true);
          setError(null);
          const res = await fetch(
            `https://restcountries.com/v3.1/alpha/${cca3}?fields=name,cca3,capital,region,flags,population,languages,currencies,latlng,capitalInfo`
          );
          const data = await res.json();
          const countryData = Array.isArray(data) ? data[0] : data;
          if (!countryData) throw new Error("Country not found");
          setCountry(countryData);
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
      <div className="min-h-screen flex items-center justify-center bg-[#fdf6e9]">
        <p className="text-slate-800 text-lg">Loading country details…</p>
      </div>
    );
  }

  if (error || !country) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf6e9] text-slate-900">
        <p className="mb-4 text-lg">Oops: {error || "Country not found"}</p>
        <button
          onClick={() => navigate(-1)}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-amber-50"
        >
          ← Go back
        </button>
      </div>
    );
  }

  // --- Map-related data (Google Maps embed) ---
  const lat = country.capitalInfo?.latlng?.[0] ?? country.latlng?.[0] ?? null;
  const lng = country.capitalInfo?.latlng?.[1] ?? country.latlng?.[1] ?? null;
  const hasCoords = lat !== null && lng !== null;

  const mapEmbedUrl = hasCoords
    ? `https://www.google.com/maps?q=${lat},${lng}&z=5&output=embed`
    : null;

  const mapLinkUrl = hasCoords
    ? `https://www.google.com/maps?q=${lat},${lng}&z=5`
    : null;

  return (
    <div className="min-h-screen bg-[#fdf6e9] text-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-sm font-medium shadow-sm hover:bg-amber-50"
        >
          ← Back
        </button>

        {/* Same card UI as list, but larger & without button */}
        <CountryCard countries={[country]} isDetails={true} />

        {/* Map below the card */}
        {hasCoords && (
          <div className="mt-8 space-y-2">
            <h2 className="text-lg font-semibold">
              Location of {country.name?.common} on the map
            </h2>
            <div className="w-full rounded-2xl overflow-hidden border border-amber-200 h-72 bg-white">
              <iframe
                title={`Map of ${country.name?.common}`}
                src={mapEmbedUrl}
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {mapLinkUrl && (
              <a
                href={mapLinkUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-700 hover:underline"
              >
                Open in Google Maps ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
