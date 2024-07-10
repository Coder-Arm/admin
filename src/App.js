import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import AdminPage from "./page/AdminPage";
import LoginPage from "./page/LoginPage";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path={'/'} element={<LoginPage/>}/>
        <Route path={'/admin'} element={<AdminPage/>}/>
        <Route path={'/dashboard'} element={<Dashboard/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
