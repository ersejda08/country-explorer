import { Link } from "react-router-dom";

const Hero = ({
  title = "Explore the world",
  subTitle = "Let's find interesting data from countries",
}) => {
  return (
    <section className="bg-amber-100 py-20 mb-6 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-slate-700">{subTitle}</p>
          <Link to="/*">
            <button className="mt-4 rounded-full bg-amber-300 px-6 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-amber-400 transition">
              Start exploring
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
