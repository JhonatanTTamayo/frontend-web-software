import { React } from "react";
import { Routes, Route} from "react-router-dom";
import SignUpPage from "./pages/guest/SignUp/SignUpPage";
import LoginPage from "./pages/guest/Login/LoginPage";
import LayoutPage from "./pages/general/Layout/LayoutPage";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Proyecto de Desarrollo</h1>
      </div>

      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}


