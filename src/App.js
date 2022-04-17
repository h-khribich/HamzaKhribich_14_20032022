import './styles/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
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
