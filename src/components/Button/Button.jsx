import PropTypes from 'prop-types';
import cn from 'classnames';

import add from 'assets/images/add.svg';

import style from './Button.module.css';

export function Button({ title, onClick, className, ...restProps }) {
  return (
    <button
      className={cn(style.btn, className)}
      type="button"
      onClick={onClick}
      {...restProps}
    >
      <img src={add} alt="add" />
      {title.toUpperCase()}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
