import { useEffect } from "react";
import CardsList from "../../components/CardsList/CardsList";
import { useDispatch } from "react-redux";
import { getAll } from "../../redux/operation";

function TweetsPage() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return <CardsList />;
}

export default TweetsPage;
