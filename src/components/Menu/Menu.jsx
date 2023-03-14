import { menuConfig } from 'constants/menu';
import PropTypes from 'prop-types';

import style from './Menu.module.css';

export function Menu() {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        {menuConfig.map(({ title, image, id }) => {
          return <MenuItem title={title} image={image} id={id} />;
        })}
      </ul>
    </nav>
  );
}

export function MenuItem({ title, image }) {
  return (
    <li className={style.navItem}>
      <a href="#" className={style.navLink}>
        <img src={image} alt="book" />
        <span>{title}</span>
      </a>
    </li>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
