import locationIcon from 'assets/images/location.svg';
import mailIcon from 'assets/images/mail.svg';
import phoneIcon from 'assets/images/phone.svg';

import { Paper } from 'components/Paper';

import style from './TutorList.module.css';

export function TutorList({ tutors }) {
  return (
    <>
      {tutors.map(
        ({ firstName, lastName, patronymic, phone, email, city, options, className }) => (
          <TutorItem
            key={phone}
            firstName={firstName}
            lastName={lastName}
            patronymic={patronymic}
            phone={phone}
            email={email}
            city={city}
            options={options}
          />
        )
      )}
    </>
  );
}

export function TutorItem({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
}) {
  return (
    <Paper className={style.tutorItem}>
      <div className={style.tutorClm}>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span>{patronymic}</span>
      </div>
      <div className={style.tutorClm}>
        <span>
          <img className={style.tutorIcon} src={phoneIcon} alt="phone" />
          {phone}
        </span>
        <span>
          <img className={style.tutorIcon} src={mailIcon} alt="mail" />
          {email}
        </span>
        <span>
          <img className={style.tutorIcon} src={locationIcon} alt="location" />
          {city}
        </span>
      </div>
      <div className={style.tutorClm}>
              <span>{options}</span>
      </div>
    </Paper>
  );
}
