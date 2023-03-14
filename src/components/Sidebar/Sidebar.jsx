import userIcon from '../../assets/images/user.svg';
import cap from '../../assets/images/academic-cap.svg';
import book from '../../assets/images/book-open.svg';
import { Menu } from 'components/Menu';

import style from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={style.aside}>
      <div className={style.logo}></div>
      <Menu/>
      <div className={style.user}>
        <img src={userIcon} alt="user" height="24" width="24" />
        <span>Біл Гейтс</span>
      </div>
    </aside>
  );
}

