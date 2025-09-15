import { Link } from 'react-router-dom';

const TripList = ({ trips, onDelete, currentPage, itemsPerPage }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'PLANNED':
        return 'bg-yellow-100 text-yellow-800';
      case 'ONGOING':
        return 'bg-blue-100 text-blue-800';
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleDelete = (tripId, tripDestination) => {
    if (window.confirm(`Are you sure you want to delete the trip to ${tripDestination}?`)) {
      onDelete(tripId);
    }
  };

  if (trips.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-gray-500">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No trips found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Destination
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {trips.map((trip) => (
              <tr key={trip.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{trip.destination}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{formatDate(trip.startDate)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{formatDate(trip.endDate)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{formatPrice(trip.price)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(trip.status)}`}>
                    {trip.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <Link
                      to={`/edit/${trip.id}`}
                      className="text-blue-600 hover:text-blue-900 transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(trip.id, trip.destination)}
                      className="text-red-600 hover:text-red-900 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        {trips.map((trip) => (
          <div key={trip.id} className="border-b border-gray-200 p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-gray-900">{trip.destination}</h3>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(trip.status)}`}>
                {trip.status}
              </span>
            </div>
            
            <div className="space-y-1 text-sm text-gray-600 mb-3">
              <div className="flex justify-between">
                <span>Start:</span>
                <span>{formatDate(trip.startDate)}</span>
              </div>
              <div className="flex justify-between">
                <span>End:</span>
                <span>{formatDate(trip.endDate)}</span>
              </div>
              <div className="flex justify-between">
                <span>Price:</span>
                <span className="font-medium">{formatPrice(trip.price)}</span>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <Link
                to={`/edit/${trip.id}`}
                className="text-blue-600 hover:text-blue-900 text-sm font-medium transition-colors"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(trip.id, trip.destination)}
                className="text-red-600 hover:text-red-900 text-sm font-medium transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripList;
