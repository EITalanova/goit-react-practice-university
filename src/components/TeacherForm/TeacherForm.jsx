import { Paper } from 'components/Paper';
import { Button } from 'components/Button/Button';

import style from './TeacherForm.module.css';

export function TeacherForm() {
  return (
    <Paper className={style.formWrapper}>
      <h3 className={style.formTitle}>Додати викладача</h3>
      <form className={style.form}>
        <label>
          <input required className={style.formInput} placeholder="Прізвищє"/>
        </label>
        <label>
          <input required className={style.formInput} placeholder="Ім'я" />
        </label>
        <label>
          <input required className={style.formInput} placeholder="По-батькові" />
        </label>
        <label>
          <input required className={style.formInput} placeholder="Телефон" />
        </label>
        <label>
          <input required className={style.formInput} placeholder="Email" />
        </label>
        <label>
          <input required className={style.formInput} placeholder="Місто" />
        </label>
        <Button className={style.tutorBtn} title="Запросити" />
      </form>
    </Paper>
  );
}
