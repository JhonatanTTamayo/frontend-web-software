import {React} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import WebHome from "./pages/guest/WebHome/WebHome";
import WebLogin from "./pages/user/WebLogin";
import Layout from "./pages/general/Layout";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WebHome />} />
          <Route path="login" element={<WebLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

