import { menuConfig } from 'constants/menu';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import style from './Menu.module.css';

export function Menu() {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        {menuConfig.map(({ title, image, id, pathName }) => {
          return <MenuItem title={title} image={image} id={id} path={pathName} />;
        })}
      </ul>
    </nav>
  );
}

export function MenuItem({ title, image, path }) {
  return (
    <li className={style.navItem}>
      <NavLink to={path} className={navData => (navData.isActive ? style.active : style.navLink)}>
        <img src={image} alt={path} />
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
