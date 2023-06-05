import s from './Button.module.scss';

function Button({ children, onClick}) {
  const btnClass = children === "Follow" ? s.btn : `${s.btn} ${s.reversColor}`;
  return <button className={btnClass} onClick={onClick}>{children}</button>;}

export default Button
