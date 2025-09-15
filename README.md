# 🧳 Trip Management App

A modern, responsive React application for managing travel trips with full CRUD operations, search, filtering, and pagination.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **📝 Complete CRUD Operations** - Create, read, update, and delete trips
- **🔍 Advanced Search & Filtering** - Search by destination, filter by status
- **📊 Smart Sorting** - Sort by price, date, or destination
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **💾 Data Persistence** - All data saved to localStorage
- **✅ Form Validation** - Real-time validation with helpful error messages
- **📄 Pagination** - Navigate through trips with customizable page size
- **📈 Dashboard Analytics** - View trip statistics and summaries

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/goutamkushwah/React-Trip-Management-SEP-2025.git
cd trip-management

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.8.2
- **Forms**: React Hook Form 7.62.0
- **State Management**: React Hooks (useState, useEffect)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   ├── TripList.jsx    # Trip list display
│   ├── TripForm.jsx    # Add/Edit trip form
│   ├── SearchFilter.jsx # Search and filter controls
│   └── Pagination.jsx  # Pagination component
├── pages/              # Page components
│   ├── Dashboard.jsx   # Main dashboard
│   ├── AddTrip.jsx     # Add new trip page
│   └── EditTrip.jsx    # Edit trip page
├── data/
│   └── trips.js        # Sample data and constants
├── App.jsx             # Main app component
└── main.jsx            # Application entry point
```
## 📸 Screenshots

## 📸 Screenshots

### Dashboard View
## 📸 Screenshots

### Dashboard View
### Dashboard View
![Dashboard](./screenshot/dashboard(1).png)

### Add Trip Form
![Add Trip](./screenshot/dashboard(2).png)

### Edit Trip Form
![Edit Trip](./screenshot/dashboard(3).png)

## 🎯 Usage

### Dashboard
- View all trips in a responsive table/card layout
- Search trips by destination name
- Filter by status (Planned, Ongoing, Completed)
- Sort by price, start date, end date, or destination
- Navigate through pages using pagination

### Adding a Trip
1. Click "Add Trip" button
2. Fill in the required information:
   - Destination name
   - Start date (cannot be in the past)
   - End date (must be after start date)
   - Price (must be greater than 0)
   - Status
3. Click "Save Trip"

### Editing a Trip
1. Click the edit button on any trip
2. Modify the information as needed
3. Click "Update Trip"

### Deleting a Trip
1. Click the delete button on any trip
2. Confirm the deletion in the dialog

## 🎨 Trip Data Structure

Each trip contains:
- **Destination**: Full destination name (e.g., "Paris, France")
- **Start Date**: Trip start date with validation
- **End Date**: Trip end date (must be after start date)
- **Price**: Trip cost in USD
- **Status**: Planned, Ongoing, or Completed

## 📱 Responsive Design

- **Desktop**: Full table view with all columns
- **Tablet**: Adaptive layout with optimized spacing
- **Mobile**: Card-based layout for better readability

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🚀 Deployment

The app can be deployed to any static hosting service:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

Popular hosting options:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Firebase Hosting**: `firebase deploy`

## 🎯 Future Enhancements

- [ ] Export trips to CSV/PDF
- [ ] Trip categories and tags
- [ ] Image upload for trips
- [ ] Advanced filtering options
- [ ] Dark mode toggle
- [ ] Trip sharing functionality
- [ ] Calendar view
- [ ] Expense tracking
- [ ] Integration with travel APIs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Bundled with [Vite](https://vitejs.dev/)
- Icons from [Heroicons](https://heroicons.com/)

---

**Made with ❤️ for better trip management**
