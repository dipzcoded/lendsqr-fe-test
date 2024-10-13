import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import AppLayout from "./components/custom/AppLayout";
import User from "./pages/Users/User";
import UserDetail from "./pages/UserDetails/UserDetail";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route index path="/"  element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
        <Route element={<AppLayout />}>
          <Route element={<Navigate replace to="/users" />} />
          <Route path="users" element={<User />} />
          <Route path="users/:id" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
