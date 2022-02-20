import s from './Button.module.css';

const Button = ({ btnLabel, handleClick, ...allProps }) => {
  return (
    <button
      type="button"
      className={s.button}
      onClick={handleClick}
      {...allProps}
    >
      {btnLabel}
    </button>
  );
};

export default Button;

