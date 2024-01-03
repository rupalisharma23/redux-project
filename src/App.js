import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/products" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
