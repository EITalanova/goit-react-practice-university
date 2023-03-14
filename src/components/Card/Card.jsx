import PropTypes from 'prop-types';

import { Paper } from 'components/Paper';

import school from 'assets/images/school.svg';
import deelete from 'assets/images/delete.svg';
import edit from 'assets/images/edit.svg';

import style from './Card.module.css';

export function Card({ universityName }) {
  return (
    <Paper className={style.universityCard}>
      <div className={style.universityConteiner}>
        <img  className={style.universityIcon} src={school} alt="school" />
        <p className={style.universityText}>Університети</p>
        <h3 className={style.universityTitle}>{universityName}</h3>
        <div className={style.universityBtnContainer}>
          <button className={style.universityBtn}>
            <img src={edit} alt="edit"></img>
          </button>
          <button className={style.universityBtn}>
            <img src={deelete} alt="delete"></img>
          </button>
        </div>
      </div>
    </Paper>
  );
}

Card.protoTypes = {
  universityName: PropTypes.string.isRequired,
};
