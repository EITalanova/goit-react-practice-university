
import cn from 'classnames';
import PropTypes from 'prop-types';

import { StyledSection } from "./StyledSection"

export function Section({ children, title, position, icon }) {
    return <StyledSection>
        <h2 className={cn('section-title', { 'position-right': position === 'right' })}>{title}</h2>
        {icon && (
            <img src={icon} alt="icon" />
        )}
        <div className="section-content">{children}</div>
</StyledSection>
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}