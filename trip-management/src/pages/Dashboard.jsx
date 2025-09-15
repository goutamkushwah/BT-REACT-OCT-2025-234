import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { tripsData } from '../data/trips';
import Navbar from '../components/Navbar';
import SearchFilter from '../components/SearchFilter';
import TripList from '../components/TripList';
import Pagination from '../components/Pagination';

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortBy, setSortBy] = useState('startDate-desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Load trips from localStorage or use dummy data
  useEffect(() => {
    const savedTrips = localStorage.getItem('trips');
    if (savedTrips) {
      setTrips(JSON.parse(savedTrips));
    } else {
      setTrips(tripsData);
      localStorage.setItem('trips', JSON.stringify(tripsData));
    }
  }, []);

  // Filter and sort trips
  const filteredAndSortedTrips = useMemo(() => {
    let filtered = trips.filter(trip => {
      const matchesSearch = trip.destination.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = !statusFilter || trip.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    // Sort trips
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'startDate-asc':
          return new Date(a.startDate) - new Date(b.startDate);
        case 'startDate-desc':
          return new Date(b.startDate) - new Date(a.startDate);
        case 'destination-asc':
          return a.destination.localeCompare(b.destination);
        case 'destination-desc':
          return b.destination.localeCompare(a.destination);
        default:
          return 0;
      }
    });

    return filtered;
  }, [trips, searchTerm, statusFilter, sortBy]);

  // Paginate trips
  const paginatedTrips = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedTrips.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedTrips, currentPage, itemsPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredAndSortedTrips.length / itemsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, sortBy]);

  // Delete trip
  const handleDeleteTrip = (tripId) => {
    const updatedTrips = trips.filter(trip => trip.id !== tripId);
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  };

  // Calculate dashboard statistics
  const stats = useMemo(() => {
    const totalTrips = trips.length;
    const totalPrice = trips.reduce((sum, trip) => sum + trip.price, 0);
    const averagePrice = totalTrips > 0 ? totalPrice / totalTrips : 0;
    
    const statusCounts = trips.reduce((acc, trip) => {
      acc[trip.status] = (acc[trip.status] || 0) + 1;
      return acc;
    }, {});

    return {
      totalTrips,
      averagePrice,
      statusCounts
    };
  }, [trips]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Trips</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.totalTrips}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Average Price</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      ${stats.averagePrice.toFixed(2)}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Status Breakdown</dt>
                    <dd className="text-sm text-gray-900">
                      Planned: {stats.statusCounts.PLANNED || 0} | 
                      Ongoing: {stats.statusCounts.ONGOING || 0} | 
                      Completed: {stats.statusCounts.COMPLETED || 0}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header with Add Trip Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Trip Management</h1>
          <Link
            to="/add"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New Trip
          </Link>
        </div>

        {/* Search and Filter */}
        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Trip List */}
        <TripList
          trips={paginatedTrips}
          onDelete={handleDeleteTrip}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={filteredAndSortedTrips.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default Dashboard;
