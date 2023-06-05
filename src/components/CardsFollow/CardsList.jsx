import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllList } from "../../redux/selectot";
import { updateById } from "../../redux/operation";
import { changeList } from "../../redux/slice";
import { useParams } from "react-router-dom";

import Button from "../Button/Button";

import s from "./CardsList.module.scss";


function CardsList() {
  const [updateUser, setUpdateUser] = useState(null);
  const [listFilter, setListFilter] = useState([]);
  const allCards = useSelector(getAllList);
  const { filter } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (updateUser) {
      dispatch(updateById(updateUser));
    }
    setListFilter(allCards);
  }, [dispatch, updateUser, allCards]);

  useEffect(() => {
    switch (filter) {
      case "follow":
        setListFilter(allCards?.filter((item) => !item.follow));
        break;

      case "following":
        setListFilter(allCards?.filter((item) => item.follow));
        break;

      default:
        setListFilter(allCards);
    }
  }, [filter, allCards]);

  function handleClick(id) {
    const updateList = allCards.map((item) => {
      if (item.id === id) {
        const newItem = {
          ...item,
          follow: !item.follow,
          followers: item.follow ? item.followers - 1 : item.followers + 1,
        };
        setUpdateUser(newItem);
        return newItem;
      }
      return item;
    });
    dispatch(changeList(updateList));
  }

  return (
    <ul className={s.cardsList}>
      {listFilter?.map((item) => {
        const formattedFollowers = new Intl.NumberFormat("en-US", {
          style: "decimal",
        }).format(item.followers);

        return (
          <li key={item.id}>
            <div className={s.cardWrap}>
              <div className={s.avaWrap}>
                <img
                  src={item.avatar}
                  className={s.ava}
                  alt="Avatar"
                  width={62}
                  height={62}
                />
              </div>
              <div className={s.cardDiscr}>
                <p>
                  {item.tweets}
                  <span> tweets</span>
                </p>
                <p>
                  {formattedFollowers}
                  <span> Followers</span>
                </p>
              </div>
              <Button onClick={() => handleClick(item.id)}>
                {item.follow ? "Following" : "Follow"}
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CardsList;
