// Dummy data for trips
export const tripsData = [
  {
    id: 1,
    destination: "Paris, France",
    startDate: "2024-03-15",
    endDate: "2024-03-22",
    price: 1200,
    status: "PLANNED"
  },
  {
    id: 2,
    destination: "Tokyo, Japan",
    startDate: "2024-02-10",
    endDate: "2024-02-20",
    price: 2500,
    status: "COMPLETED"
  },
  {
    id: 3,
    destination: "New York, USA",
    startDate: "2024-01-05",
    endDate: "2024-01-12",
    price: 1800,
    status: "ONGOING"
  },
  {
    id: 4,
    destination: "London, UK",
    startDate: "2024-04-01",
    endDate: "2024-04-08",
    price: 950,
    status: "PLANNED"
  },
  {
    id: 5,
    destination: "Sydney, Australia",
    startDate: "2024-05-15",
    endDate: "2024-05-25",
    price: 2200,
    status: "PLANNED"
  },
  {
    id: 6,
    destination: "Barcelona, Spain",
    startDate: "2023-12-20",
    endDate: "2023-12-27",
    price: 800,
    status: "COMPLETED"
  },
  {
    id: 7,
    destination: "Dubai, UAE",
    startDate: "2024-06-01",
    endDate: "2024-06-10",
    price: 1500,
    status: "PLANNED"
  },
  {
    id: 8,
    destination: "Rome, Italy",
    startDate: "2024-01-20",
    endDate: "2024-01-28",
    price: 1100,
    status: "ONGOING"
  }
];

// Trip status options
export const tripStatuses = [
  { value: "PLANNED", label: "Planned" },
  { value: "ONGOING", label: "Ongoing" },
  { value: "COMPLETED", label: "Completed" }
];

// Sort options
export const sortOptions = [
  { value: "price-asc", label: "Price (Low to High)" },
  { value: "price-desc", label: "Price (High to Low)" },
  { value: "startDate-asc", label: "Start Date (Earliest)" },
  { value: "startDate-desc", label: "Start Date (Latest)" },
  { value: "destination-asc", label: "Destination (A-Z)" },
  { value: "destination-desc", label: "Destination (Z-A)" }
];
