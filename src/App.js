import { Navigate, Route, Routes } from "react-router-dom";

import TweetsPage from "./pages/TweetsPage/TweetsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TweetsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
