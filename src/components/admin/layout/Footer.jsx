const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Admin Pro. All rights reserved.
        </div>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;