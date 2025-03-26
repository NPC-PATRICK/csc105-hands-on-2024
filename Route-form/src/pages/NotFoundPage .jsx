import { Link } from "react-router-dom";
 
const NotFoundPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">404 - Page Not Found</h2>
        <p className="text-gray-500">We cant't find the page that you're looking for.</p>
        <p className="text-gray-500">Back to</p>
        <button className="inline-block px-8 py-4">
          <Link to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300"
          >Home Page</Link>
        </button>
      </div>
    </div>
  );
};
 
export default NotFoundPage;
 