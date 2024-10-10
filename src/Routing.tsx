import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Signin from "./pages/Signin/Signin";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}
