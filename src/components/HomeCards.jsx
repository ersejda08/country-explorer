import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-10">
      <div className="container-xl lg:container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-lg">
          {/* Teachers card */}
          <Card className="bg-amber-50/90">
            <div className="flex items-start gap-4 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl">
                👩‍🏫
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  For Teachers
                </p>
                <h2 className="text-xl font-bold text-slate-900">
                  Turn data into interactive lessons
                </h2>
              </div>
            </div>

            <p className="mt-1 mb-4 text-sm text-slate-700">
              Use real country data to create engaging quizzes, maps and
              classroom activities. Let your students explore the world through
              live API data.
            </p>

            <ul className="mb-4 space-y-1 text-sm text-slate-700">
              <li>• Build country comparison games</li>
              <li>• Create geography & culture quizzes</li>
              <li>• Visualize flags, capitals and regions</li>
            </ul>

            <Link
              to=""
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 hover:shadow-md transition"
            >
              Explore teaching ideas
              <span className="ml-1">➜</span>
            </Link>
          </Card>

          {/* Students card */}
          <Card className="bg-sky-50/90">
            <div className="flex items-start gap-4 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-2xl">
                🌍
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                  For Students
                </p>
                <h2 className="text-xl font-bold text-slate-900">
                  Discover the world, one country at a time
                </h2>
              </div>
            </div>

            <p className="mt-1 mb-4 text-sm text-slate-700">
              Search countries, explore flags, languages and currencies, and see
              where they are on the map. Turn curiosity into knowledge.
            </p>

            <ul className="mb-4 space-y-1 text-sm text-slate-700">
              <li>• Practice geography with real data</li>
              <li>• Learn capitals, flags and languages</li>
              <li>• Explore regions and continents</li>
            </ul>

            <Link
              to="/explore"
              className="inline-flex items-center justify-center rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-sm hover:bg-orange-200 hover:shadow-md transition"
            >
              Start exploring
              <span className="ml-1">✨</span>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
