import './App.css';
import Login from './component/Login';
import Registration from './component/Registration'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route index element={<Registration />} />
    <Route path='login' element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
