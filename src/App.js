import "./App.css";
import NavBar from "./components/NavBar.jsx";
import CreatUserPage from "./pages/CreatUserPage";
import UpdateUserPage from "./pages/UpdateUserPage";
import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserPage />} />{" "}
        <Route path="create" element={<CreatUserPage />} />{" "}
        <Route path="update/:id" element={<UpdateUserPage />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
