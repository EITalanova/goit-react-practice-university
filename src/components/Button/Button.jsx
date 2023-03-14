import PropTypes from 'prop-types';

import add from 'assets/images/add.svg'

import style from './Button.module.css'

export function Button({title, onClick}) {
    return <button className={style.btn} type="button" onClick={onClick}>
        <img src={add} alt="add" />
        {title.toUpperCase()}
</button>
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}