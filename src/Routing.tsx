import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import AppLayout from "./components/custom/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
        <Route element={<AppLayout />}>
          <Route element={<Navigate replace to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
