import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ btnLabel, handleClick, ...allProps }) => {
  return (
    <div className={s.box}>
        <button
            type="button"
            className={s.button}
            onClick={handleClick}
            {...allProps}
        >
            {btnLabel}
        </button>   
    </div>
    
  );
};

export default Button;

Button.propTypes = {
    handleClick: PropTypes.func,
    btnLabel: PropTypes.string,
}

