import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TripForm from '../components/TripForm';

const EditTrip = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [trips, setTrips] = useState([]);
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load trips from localStorage
  useEffect(() => {
    const savedTrips = localStorage.getItem('trips');
    if (savedTrips) {
      const tripsData = JSON.parse(savedTrips);
      setTrips(tripsData);
      
      // Find the trip to edit
      const tripToEdit = tripsData.find(t => t.id === parseInt(id));
      if (tripToEdit) {
        setTrip(tripToEdit);
      } else {
        // Trip not found, redirect to dashboard
        navigate('/', { 
          state: { error: 'Trip not found!' } 
        });
      }
    } else {
      // No trips data, redirect to dashboard
      navigate('/', { 
        state: { error: 'No trips data found!' } 
      });
    }
    setLoading(false);
  }, [id, navigate]);

  const handleSubmit = (formData) => {
    // Update the trip
    const updatedTrips = trips.map(t => 
      t.id === parseInt(id) 
        ? { ...t, ...formData }
        : t
    );
    
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));

    // Navigate back to dashboard
    navigate('/', { 
      state: { message: 'Trip updated successfully!' } 
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-600">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Trip Not Found</h1>
            <p className="text-gray-600 mb-6">The trip you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Edit Trip</h1>
          <p className="mt-2 text-gray-600">
            Update the details for your trip to {trip.destination}.
          </p>
        </div>

        <TripForm
          trip={trip}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isEditing={true}
        />
      </div>
    </div>
  );
};

export default EditTrip;
