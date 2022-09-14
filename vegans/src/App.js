import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUpPage from "./components/LoginPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;