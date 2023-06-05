import Button from "../Button/Button";
import s from "./CardsList.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { getAllList } from "../../redux/selectot";
import { useEffect, useState } from "react";
import { updateById } from "../../redux/operation";

function OneCardFollow() {
  const [tweetsList, settweetsList] = useState(null);
  const [updateUser, setUpdateUser] = useState(null);
  const allCards = useSelector(getAllList);
  const dispatch = useDispatch();

  useEffect(() => {
    settweetsList(allCards);
  }, [allCards]);

  useEffect(() => {
    if (updateUser) {
      dispatch(updateById(updateUser));
    }
  }, [dispatch, updateUser]);

  function handleClick(id) {
    const updateList = tweetsList.map((item) => {
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
    settweetsList(updateList);
  }

  return (
    tweetsList?.length > 0 &&
    tweetsList.map((item) => {
      const formattedTweets = Number(item.tweets).toLocaleString();
      const formattedFollowers = new Intl.NumberFormat("en-US", {
        style: "decimal",
      }).format(item.followers);

      return (
        <div className={s.cardWrap} key={item.id}>
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
              {formattedTweets}
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
      );
    })
  );
}

export default OneCardFollow;
