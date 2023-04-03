import { nanoid } from 'nanoid';

import { Paper } from 'components/Paper';

import dots from 'assets/images/dots.svg';
import { ReactComponent as Edit } from 'assets/images/edit.svg';
import { ReactComponent as Deletee } from 'assets/images/delete.svg';
import style from './GeneralCardList.module.css';
import { useState, useEffect } from 'react';

export function GeneralCardList({ list }) {
  return (
    <div className={style.cardList}>
      {list.map(item => (
        <GeneralCard name={item.name} key={nanoid()} />
      ))}
    </div>
  );
}

function GeneralCard({ name }) {
  const [anchor, setAnchor] = useState(null);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    // window.addEventListener('click', onOutsideClick);


    return () => {
      window.removeEventListener('keydown', onKeyDown);
      // window.removeEventListener('click', onOutsideClick);

    };
  }, []);

  // onOutsideClick = () => {
  //   if (anchor) {
  //     setAnchor(null);
  //     return;
  //   }
  //   setAnchor(e.currentTarget);
  // }

  const onKeyDown = (e) => {
    if (e.code === 'Escape') {
      setAnchor(null);
    }
  };

  const handleAnchor = e => {
    if (anchor) {
      setAnchor(null);
      return;
    }
    setAnchor(e.currentTarget);
  };

  const handleOpenModal = () => {
    setAnchor(null);
    setIsOpenModal(true);
  }

  return (
    <Paper className={style.generalCardContainer}>
      <p>{name}</p>
      <button className={style.generalCardBtn} onClick={handleAnchor}>
        <img src={dots} alt="dots" />
      </button>
      {anchor && (
        <div className={style.action}>
          <button type="button" className={style.actionBtn} onClick={handleOpenModal}>
            <Edit className={style.actionIcon} />
            Редагувати
          </button>
          <button type="button" className={style.actionBtn}>
            <Deletee className={style.actionIcon} />
            Видалити
          </button>
        </div>
      )}
    </Paper>
  );
}
