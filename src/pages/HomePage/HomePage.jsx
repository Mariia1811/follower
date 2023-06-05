import { Link } from "react-router-dom";
import s from "./HomePage.module.scss"

function HomePage() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Following</h1>
      <Link className={s.link} to="/tweets">Follow</Link>
    </div>
  );
}

export default HomePage;
