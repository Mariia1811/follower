import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/tweets">tweets</Link>
    </div>
  );
}

export default HomePage;
