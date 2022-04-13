import './styles/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/createEmployee';
import EmployeeList from './pages/employeeList';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
