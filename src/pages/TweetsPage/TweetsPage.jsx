import { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/operation";
import { isBtnLoadMoreHidden } from "../../redux/selectot";

import Button from "../../components/Button/Button";

import s from "./TweetsPage.module.scss"

function TweetsPage() {
  const [page, setPage] = useState(1);

  const isBtnHidden = useSelector(isBtnLoadMoreHidden);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { filter } = useParams();
  const backLinkHref = useRef(location.state?.from ?? "/");

  useEffect(() => {
    dispatch(getAll({ page }));
  }, [dispatch, page]);

  useEffect(() => {
    if (!filter) {
      navigate(`filter/all`);
    }
  }, [filter, navigate]);

  const handleFilter = (filter) => {
    navigate(`filter/${filter}`);
  };

  function handleClickLoadMore() {
    setPage((pS) => pS + 1);
  }
  return (
    <div className={s.container}>
      <header className={s.header}>
          <Link to={backLinkHref.current} className={s.goBackLink}> 🡨 Go back</Link>
        <ul className={s.btnfilterList}>
          <li><button className={s.btnfilter} onClick={() => handleFilter("all")}>show all</button></li>
          <li><button className={s.btnfilter} onClick={() => handleFilter("follow")}>follow</button></li>
          <li><button className={s.btnfilter} onClick={() => handleFilter("following")}>following</button></li>
          </ul>
      </header>
      <div>
      <Outlet />
      {!isBtnHidden && (
        <Button onClick={handleClickLoadMore}>Load more...</Button>
        )}
        </div>
    </div>
  );
}

export default TweetsPage;
