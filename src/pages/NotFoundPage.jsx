import { Link } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";
const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <i className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
      <FaTriangleExclamation className="text-yellow-400 fa-4x mb-4 text-5xl" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">
        We are working to bring this page to life soon. Please be patient
      </p>
      <Link
        to="/"
        className="mt-4 rounded-full bg-amber-300 px-6 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-amber-400 transition"
      >
        Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
