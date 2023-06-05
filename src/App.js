import { Navigate, Route, Routes } from "react-router-dom";

import TweetsPage from "./pages/TweetsPage/TweetsPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
