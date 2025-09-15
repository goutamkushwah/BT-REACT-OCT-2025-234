import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TripForm from '../components/TripForm';

const AddTrip = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  // Load trips from localStorage
  useEffect(() => {
    const savedTrips = localStorage.getItem('trips');
    if (savedTrips) {
      setTrips(JSON.parse(savedTrips));
    }
  }, []);

  const handleSubmit = (formData) => {
    // Generate new ID
    const newId = Math.max(...trips.map(trip => trip.id), 0) + 1;
    
    // Create new trip
    const newTrip = {
      id: newId,
      ...formData
    };

    // Update trips array
    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));

    // Navigate back to dashboard
    navigate('/', { 
      state: { message: 'Trip added successfully!' } 
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Add New Trip</h1>
          <p className="mt-2 text-gray-600">
            Fill in the details below to add a new trip to your collection.
          </p>
        </div>

        <TripForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isEditing={false}
        />
      </div>
    </div>
  );
};

export default AddTrip;
