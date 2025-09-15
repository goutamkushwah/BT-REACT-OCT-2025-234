import { useForm } from 'react-hook-form';
import { tripStatuses } from '../data/trips';

const TripForm = ({ trip, onSubmit, onCancel, isEditing = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: trip || {
      destination: '',
      startDate: '',
      endDate: '',
      price: '',
      status: 'PLANNED'
    }
  });

  const handleFormSubmit = (data) => {
    // Convert price to number
    const formData = {
      ...data,
      price: parseFloat(data.price)
    };
    onSubmit(formData);
    if (!isEditing) {
      reset();
    }
  };

  const validateEndDate = (endDate) => {
    const startDate = document.getElementById('startDate').value;
    if (startDate && endDate && new Date(endDate) <= new Date(startDate)) {
      return 'End date must be after start date';
    }
    return true;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {isEditing ? 'Edit Trip' : 'Add New Trip'}
        </h2>
        
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Destination Field */}
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
              Destination *
            </label>
            <input
              type="text"
              id="destination"
              {...register('destination', { 
                required: 'Destination is required',
                minLength: {
                  value: 2,
                  message: 'Destination must be at least 2 characters'
                }
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.destination ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter destination (e.g., Paris, France)"
            />
            {errors.destination && (
              <p className="mt-1 text-sm text-red-600">{errors.destination.message}</p>
            )}
          </div>

          {/* Start Date Field */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
              Start Date *
            </label>
            <input
              type="date"
              id="startDate"
              {...register('startDate', { 
                required: 'Start date is required',
                validate: (value) => {
                  const today = new Date().toISOString().split('T')[0];
                  if (value < today) {
                    return 'Start date cannot be in the past';
                  }
                  return true;
                }
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.startDate ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.startDate && (
              <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
            )}
          </div>

          {/* End Date Field */}
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
              End Date *
            </label>
            <input
              type="date"
              id="endDate"
              {...register('endDate', { 
                required: 'End date is required',
                validate: validateEndDate
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.endDate ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.endDate && (
              <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>
            )}
          </div>

          {/* Price Field */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
              Price (USD) *
            </label>
            <input
              type="number"
              id="price"
              step="0.01"
              min="0"
              {...register('price', { 
                required: 'Price is required',
                min: {
                  value: 0.01,
                  message: 'Price must be greater than 0'
                }
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.price ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter price in USD"
            />
            {errors.price && (
              <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
            )}
          </div>

          {/* Status Field */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
              Status *
            </label>
            <select
              id="status"
              {...register('status', { required: 'Status is required' })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.status ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              {tripStatuses.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
            {errors.status && (
              <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              {isEditing ? 'Update Trip' : 'Add Trip'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TripForm;
