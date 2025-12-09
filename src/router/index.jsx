/* eslint-disable react/no-unescaped-entities */
import { createBrowserRouter } from "react-router-dom";
import adminRouter from "./adminRouter";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  ...adminRouter,
  {
    path: "*",
    element: (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    )
  }
]);

export default router;