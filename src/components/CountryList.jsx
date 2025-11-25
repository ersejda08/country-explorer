import { useEffect, useState } from "react";

const TestCountryData = () => {
  const [data, setData] = useState([]); //Stores API data
  const [loading, setLoading] = useState(true); //Indicates if data is loading
  //useEffect to fetch on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); //Activate loading state before request
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca3,capital,region"
        );
        const result = await response.json(); //Convert response to JSON
        setData(result); //Store data in state
        console.log("Full country data:", result);
      } catch (err) {
        console.log(err.message); //display error message
      } finally {
        setLoading(false); //Deactivate loading state once request is complete
      }
    };
    fetchData();
  }, []); //[] Means the function executes ONLY ONCE on component load

  return (
    <div>
      <h1 className="text-white">Check your console 👇</h1>
      <p className="text-slate-300">Data is printed in DevTools console.</p>

      <ul>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {data.slice(0, 3).map((country, index) => (
              <li key={index} className="text-white">
                {country.name.common}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default TestCountryData;
