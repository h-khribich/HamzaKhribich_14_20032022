import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/createEmployee';
import EmployeeList from './pages/employeeList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
