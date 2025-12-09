/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import { LogIn, Shield, BarChart3, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    window.location.href = '/admin';
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Access',
      description: 'Enterprise-grade security',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Real-time Analytics',
      description: 'Live data visualization',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Team Management',
      description: 'Collaborate efficiently',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          {/* Logo */}
          <div>
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <LogIn className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                Admin<span className="text-blue-600">Pro</span>
              </span>
            </div>
            <h2 className="mt-8 text-3xl font-bold text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Or{' '}
              <Link 
                to="/admin" 
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
              >
                access the dashboard directly
              </Link>
            </p>
          </div>

          {/* Login Form */}
          <div className="mt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  <span className="flex items-center">
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign in
                  </span>
                </button>
              </div>
            </form>

            {/* Direct Access */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                    Quick access
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/admin"
                  className="w-full flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
                >
                  <span>Go to Admin Dashboard</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Demo Info */}
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <span className="font-semibold">Demo Account:</span><br />
              Email: <code className="bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded">admin@example.com</code><br />
              Password: <code className="bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded">password</code>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Features & Graphics */}
      <div className="hidden lg:block relative flex-1 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative h-full flex flex-col justify-center px-12">
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Powerful Admin Dashboard
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              Everything you need to manage your business efficiently in one place.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className={`p-3 ${feature.bgColor} rounded-lg`}>
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #6b7280 1px, transparent 1px),
            linear-gradient(to bottom, #6b7280 1px, transparent 1px);
          background-size: 50px 50px;
        }
        @media (prefers-color-scheme: dark) {
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, #4b5563 1px, transparent 1px),
              linear-gradient(to bottom, #4b5563 1px, transparent 1px);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;