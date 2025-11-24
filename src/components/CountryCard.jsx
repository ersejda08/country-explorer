import logo from "../assets/images/react-logo.png";
const CountryCard = () => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow hover:shadow-lg hover:-translate-y-1 transition transform flex flex-col">
      <img src={logo} alt="Flags" className="h-32 w-full object-cover" />
      <img className="h-10 w-auto" src={logo} alt="Explorer" />
      <div className="p-4 flex-1 flex flex-col gap-1">
        <h2 className="text-lg font-semibold mb-1">Name</h2>
        <p className="text-sm text-slate-300">
          Region: <span className="font-medium">region</span>
        </p>
        <p className="text-sm text-slate-300">
          Capital: <span className="font-medium">capital</span>
        </p>
        <p className="text-sm text-slate-300">
          Population: <span className="font-medium">population</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
