// src/pages/errors/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          The page you are looking for exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;