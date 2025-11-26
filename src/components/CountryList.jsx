import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const [data, setData] = useState([]); //Stores API data
  const [loading, setLoading] = useState(true); //Indicates if data is loading
  //useEffect to fetch on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); //Activate loading state before request
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca3,capital,region,flags"
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
      <h1 className="text-white text-2xl mb-4">Country Data</h1>

      {loading ? (
        <h2 className="text-white">Loading...</h2>
      ) : (
        <CountryCard countries={data.slice(0, 15)} />
      )}
    </div>
  );
};

export default CountryList;
