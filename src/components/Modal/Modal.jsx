import { useEffect } from 'react';

import { Paper } from 'components/Paper';
import { ReactComponent as CloseIcon } from 'assets/images/close.svg';

import style from './Modal.module.css';

export function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const onKeyDown = () => {
    onClose();
  };

  return (
    <div className={style.overlay}>
          <div className={style.modal}>
              <Paper className={style.modalContent}/>
              <div className={style.WrapperModalBtn}>
              <button className={style.btnIcon} onClick={onClose}>
                <CloseIcon/>
                  </button>
                  </div>
        <Paper>{children}</Paper>
      </div>
    </div>
  );
}
