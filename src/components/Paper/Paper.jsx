import cn from 'classnames';
import PropTypes from 'prop-types';

import style from './Paper.module.css'


export function Paper({ children, className }) {
    return <div className={cn(style.paper, className)}>{children}</div>
}


Paper.propTypes = {
    className: PropTypes.string,
}