import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/operation";
import { isBtnLoadMoreHidden } from "../../redux/selectot";

import CardsList from "../../components/CardsFollow/CardsList";
import Button from "../../components/Button/Button";

function TweetsPage() {
  const [page, setPage] = useState(1);

  const isBtnHidden = useSelector(isBtnLoadMoreHidden);
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  useEffect(() => {
    dispatch(getAll({ page }));
  }, [dispatch, page]);

  function handleClickLoadMore() {
    setPage((pS) => pS + 1);
  }
  return (
    <>
      <Link to={backLinkHref.current}> 🡨 Go back</Link>
      <CardsList />
      {!isBtnHidden && (
        <Button onClick={handleClickLoadMore}>Load more...</Button>
      )}
    </>
  );
}

export default TweetsPage;
