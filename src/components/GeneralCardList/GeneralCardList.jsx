import { nanoid } from 'nanoid';
import cn from 'classnames';

import { Paper } from 'components/Paper';

import dots from 'assets/images/dots.svg';
import { ReactComponent as Edit } from 'assets/images/edit.svg';
import { ReactComponent as Deletee } from 'assets/images/delete.svg';
import style from './GeneralCardList.module.css';
import { useState, useEffect } from 'react';
import { Modal } from 'components/Modal';
import { EditModal } from 'shared/modals/EditModal';

export function GeneralCardList({ list, className, isFullItemWidth, onEditCard }) {
    const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <> 
    <div className={cn(style.cardList, className)}>
      {list.map(item => (
        <GeneralCard
          name={item.name}
          key={nanoid()}
          isFullItemWidth={isFullItemWidth}
          setIsOpenModal={setIsOpenModal}
        />
      ))}
    </div>
    {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <EditModal placeholder="Міста" onSubmit={onEditCard}/>
        </Modal>
      )}
      </>
  );
}

function GeneralCard({ name, isFullItemWidth, setIsOpenModal }) {
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

  const onKeyDown = e => {
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
  };

  return (
    <Paper className={cn(style.generalCardContainer, {[style.isFullItemWidth]: isFullItemWidth})}>
      <p>{name}</p>
      <button className={style.generalCardBtn} onClick={handleAnchor}>
        <img src={dots} alt="dots" />
      </button>
      {anchor && (
        <div className={style.action}>
          <button
            type="button"
            className={style.actionBtn}
            onClick={handleOpenModal}
          >
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
