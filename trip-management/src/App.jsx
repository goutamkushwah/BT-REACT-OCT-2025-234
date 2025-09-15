import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddTrip from './pages/AddTrip';
import EditTrip from './pages/EditTrip';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddTrip />} />
          <Route path="/edit/:id" element={<EditTrip />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
