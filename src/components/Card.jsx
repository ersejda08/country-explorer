// Card.jsx
const Card = ({ children, isDetails = false, className = "" }) => {
  const baseClasses =
    "group bg-amber-50 border border-amber-100 rounded-2xl " +
    "shadow-sm hover:shadow-md transition transform hover:-translate-y-1 " +
    "flex flex-col";

  const padding = isDetails ? "p-7" : "p-5";

  return (
    <div className={`${baseClasses} ${padding} ${className}`}>{children}</div>
  );
};

export default Card;
