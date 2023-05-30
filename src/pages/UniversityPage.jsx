import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Section } from 'components/Section/Section';
import { Card } from 'components/Card';
import { Paper } from 'components/Paper';
import { TutorList } from 'components/TutorList/TutorList';
import { Button } from 'components/Button/Button';
import { GeneralCardList } from 'components/GeneralCardList';
import { TeacherForm } from 'components/TeacherForm';
import { WidgetForm } from 'components/WidgetForm';
import { addFaculty } from 'store/facultySlice';

import universityData from 'constants/universityData.json';
import catIcon from 'assets/images/cat.svg';
import cityMarker from 'assets/images/cityMarker.svg';
import robot from 'assets/images/robot.svg';

const FORM_KEYS = {
  teacherForm: 'teacher',
  cityForm: 'city',
  facultyForm: 'faculty',
};

function UniversityPage() {
  const [modeMenu, setModeMenu] = useState([]);
  const [tutors, setTutors] = useState(universityData.tutors);
  const [faculties, setFaculties] = useState(universityData.department);
  const [cities, setCities] = useState(
    universityData.cities.map(city => ({
      name: city,
    }))
  );

  const dispatch = useDispatch();
  // const faculties = useSelector(state => state.faculty.department)

  const toggleMenu = key => {
    const element = modeMenu.find(el => el === key);
    if (!element) {
      setModeMenu(prev => [...prev, key]);
    }
    if (element) {
      const newModeMenu = modeMenu.filter(el => el !== key);
      setModeMenu(newModeMenu);
    }
  };

  const isModeMenuIncludes = key => {
    return modeMenu.includes(key);
  };

  const handleEditModal = id => {
    dispatch(editFaculty(id));
  };

  const isTeacherFormOpened = isModeMenuIncludes(FORM_KEYS.teacherForm);
  const isCityFormOpened = isModeMenuIncludes(FORM_KEYS.cityForm);
  const isFacultyFormOpened = isModeMenuIncludes(FORM_KEYS.facultyForm);

  const addTutor = tutor => {
    setTutors([...universityData.tutors, tutor]);
  };

  const addCity = city => {
    const newCity = { name: city };
    setCities([...cities, newCity]);
  };

  const onAddFaculty = faculty => {
    const newFaculty = { name: faculty };
    dispatch(addFaculty(newFaculty));
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
        {isTeacherFormOpened && <TeacherForm addTutor={addTutor} />}
        <Button
          title={isTeacherFormOpened ? 'Закрити форму' : 'Додати викладача'}
          onClick={() => toggleMenu(FORM_KEYS.teacherForm)}
        />
      </Section>
      <Section icon={cityMarker} title="Міста">
        <GeneralCardList list={cities} />
        {isCityFormOpened && (
          <WidgetForm
            handleSubmit={addCity}
            buttonName="Додати"
            title="Міста"
            placeholder="Місто"
          />
        )}
        <Button
          title={isCityFormOpened ? 'Закрити форму' : 'Додати місто'}
          onClick={() => toggleMenu(FORM_KEYS.cityForm)}
        />
      </Section>
      <Section icon={robot} title="Факультети">
        <GeneralCardList list={faculties} />
        {isFacultyFormOpened && (
          <WidgetForm
            handleSubmit={onAddFaculty}
            buttonName="Додати"
            title="Факультети"
            placeholder="Факультет"
          />
        )}
        <Button
          title={isFacultyFormOpened ? 'Закрити форму' : 'Додати факультет'}
          onClick={() => {
            toggleMenu(FORM_KEYS.facultyForm);
          }}
        />
      </Section>
    </>
  );
}

export default UniversityPage;
