import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-white text-xl font-bold hover:text-blue-200 transition-colors"
            >
              Trip Manager
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-700 hover:text-white'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/add"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/add'
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-700 hover:text-white'
              }`}
            >
              Add Trip
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
