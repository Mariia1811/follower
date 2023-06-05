import { Navigate, Route, Routes } from "react-router-dom";

import TweetsPage from "./pages/TweetsPage/TweetsPage";
import HomePage from "./pages/HomePage/HomePage";
import CardsList from "./components/CardsFollow/CardsList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tweets" element={<TweetsPage />}>
        <Route path="filter/:filter" element={<CardsList />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
