import Button from "../Button/Button";
import s from "./OneCardFollow.module.scss";
import a from "../../img/Hansel.png";

function OneCardFollow() {

  // const formattedValue = Number(value).toLocaleString();
  function handleClick() {
    console.log("click");
  }
  return (
    <div className={s.cardWrap}>
      <div className={s.avaWrap}>
        <img src={a} className={s.ava} alt="Avatar" width={62} height={62} />
      </div>
      <div className={s.cardDiscr}>
        <p>
          777<span> tweets</span>
        </p>
        <p>
          100,500<span> Followers</span>
        </p>
      </div>
      <Button onClick={handleClick}>Follow</Button>
    </div>
  );
}

export default OneCardFollow;
