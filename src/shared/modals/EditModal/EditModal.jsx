import { ReactComponent as EditIcon } from 'assets/images/edit.svg';
import { Button } from 'components/Button/Button';

import style from './EditModal.module.css';

export function EditModal({ placeholder, onSubmit }) {
  return (
    <div className={style.modalEditWrapper}>
      <div className={style.modalEditTypograhy}>
        <EditIcon className={style.modalEditIcon} />
        <p className={style.modalEditTitle} >Редагувати інформацію</p>
      </div>
      <label>
        <input className={style.modalEditInput} type="text" required placeholder={placeholder} />
      </label>
      <Button className={style.modalEditSaveBtn} title="Зберегти"></Button>
    </div>
  );
}
