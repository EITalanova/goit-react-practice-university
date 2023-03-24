import { useState } from 'react';

import { Paper } from 'components/Paper';
import { Button } from 'components/Button/Button';

import style from './TeacherForm.module.css';

export function TeacherForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    patronymic: '',
    phone: '',
    email: '',
    city: '',

  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
     })
  }

  function checkSummitAbility(formState) {
    return Object.values(formState).every(value => {
      return value.length > 1;
    })
  }

  const isEnableSubmit = checkSummitAbility(formData);

  return (
    <Paper className={style.formWrapper}>
      <h3 className={style.formTitle}>Додати викладача</h3>
      <form className={style.form}>
        <label>
          <input
            required
            className={style.formInput}
            name="lastName"
            placeholder="Прізвищє"
            onChange={handleChange}
          />
        </label>
        <label>
          <input required className={style.formInput} placeholder="Ім'я" onChange={handleChange} name="firstName"/>
        </label>
        <label>
          <input
            required
            className={style.formInput}
            placeholder="По-батькові"
            onChange={handleChange} name="patronymic"
          />
        </label>
        <label>
          <input required className={style.formInput} placeholder="Телефон" onChange={handleChange} name="phone"/>
        </label>
        <label>
          <input required className={style.formInput} placeholder="Email" onChange={handleChange} name="email" />
        </label>
        <label>
          <input required className={style.formInput} placeholder="Місто" onChange={handleChange} name="city"/>
        </label>
        <Button className={style.tutorBtn} title="Запросити" type="submit" disabled={!isEnableSubmit} />
      </form>
    </Paper>
  );
}
