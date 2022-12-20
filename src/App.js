
import Login  from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
