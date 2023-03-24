import { useState } from 'react';

import { Section } from 'components/Section/Section';
import { Card } from 'components/Card';
import { Paper } from 'components/Paper';
import { TutorList } from 'components/TutorList/TutorList';
import { Button } from 'components/Button/Button';
import { GeneralCardList } from 'components/GeneralCardList';
import { TeacherForm } from 'components/TeacherForm';
import { WidgetForm } from 'components/WidgetForm';

import universityData from 'constants/universityData.json';
import catIcon from 'assets/images/cat.svg';
import cityMarker from 'assets/images/cityMarker.svg';
import robot from 'assets/images/robot.svg';

import style from './UniversityPage.module.css';

const FORM_KEYS = {
  teacherForm: 'teacher',
  cityForm: 'city',
  facultyForm: 'faculty',
};

export function UniversityPage() {
  const [modeMenu, setModeMenu] = useState([]);
  const [tutors, setTutors] = useState(universityData.tutors);
  const [cities, setCities] = useState(
    universityData.cities.map(city => ({
      name: city,
    }))
  );
  const toggleMenu = key => {
    const index = modeMenu.indexOf(key);
    if (index < 0) {
      setModeMenu([...modeMenu, key]);
    }
    if (index > 0) {
      setModeMenu([...modeMenu.splice(index, 1)]);
    }
  };
  const addTutor = tutor => {
    setTutors([...universityData.tutors, tutor]);
  };

  const addCity = city => {
    setCities([...cities, city]);
  };

  return (
    <>
      <Section title="Інформація про університет" position="right">
        <div className="university-wraper">
          <Card universityName={universityData.name} />
          <Paper className="university-card">
            <p>
              Досвід, концентрат знань та можливість уникнути більшості помилок
              при прийомі на роботу. Ми знаємо, що хочуть більшість локальних та
              іноземних компаній і можемо вам це дати. А ще ми постійно
              вдосконалюємо наші курси програмування, додаючи щось нове. Ви
              можете особисто ознайомитись з історіями успіху наших випускників,
              щоб переконатись у ефективності нашої методики навчання. Так, ми
              почнемо з азів та найпростішої інформації. Знаємо, що більшість
              людей приходять до нас із нульовими знаннями.
            </p>
          </Paper>
        </div>
      </Section>
      <Section title="Викладачі" icon={catIcon}>
        <TutorList tutors={tutors} />
        {modeMenu.includes(FORM_KEYS.teacherForm) && (
          <TeacherForm addTutor={addTutor} />
        )}
        <Button
          title="Додати викладачів"
          onClick={() => toggleMenu(FORM_KEYS.teacherForm)}
        />
      </Section>
      <Section icon={cityMarker} title="Міста">
        <GeneralCardList list={cities} />
        {modeMenu.includes(FORM_KEYS.cityForm) && (
          <WidgetForm handleSubmit={addCity} buttonName="Додати" />
        )}
        <Button
          title="Додати місто"
          onClick={() => toggleMenu(FORM_KEYS.cityForm)}
        />
      </Section>
      <Section icon={robot} title="Факультети">
        <GeneralCardList list={universityData.department} />
        <Button title="Додати факультет" />
      </Section>
    </>
  );
}
