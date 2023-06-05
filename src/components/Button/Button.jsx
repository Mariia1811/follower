import s from "./Button.module.scss";

function Button({ children, onClick }) {
  const btnClass =
    children === "Following" ? `${s.btn} ${s.reversColor}` : s.btn;
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
