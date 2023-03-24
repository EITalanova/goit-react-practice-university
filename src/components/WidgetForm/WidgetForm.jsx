import { useState } from 'react';

import { Paper } from 'components/Paper';
import { Button } from 'components/Button/Button';

import style from './WidgetForm.module.css';

export const WidgetForm = ({
    title,
    placeholder,
    buttonName,
    handleSubmit
}) => {
  const [widgetFormData, setWidgetFormData] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(widgetFormData);
  }

  function handleChange(e) {
    const { value } = e.target;
    setWidgetFormData(value);
  }
    
    const isEnableSubmit = widgetFormData.length > 1;

  return (
    <Paper className={style.formWrapper}>
      <h3 className={style.formTitle}>{title}</h3>
      <form className={style.form} onSubmit={onSubmit}>
        <label>
          <input
            required
            className={style.formInput}
            name={placeholder}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </label>

        <Button
          className={style.tutorBtn}
          title={buttonName}
          type="submit"
          disabled={!isEnableSubmit}
        />
      </form>
    </Paper>
  );
};
