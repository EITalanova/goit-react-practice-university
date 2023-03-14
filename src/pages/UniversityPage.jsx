import { Section } from 'components/Section/Section';
import { Card } from 'components/Card';
import { Paper } from 'components/Paper';

import universityData from 'constants/universityData.json'

import style from './UniversityPage.module.css';

export function UniversityPage() {
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
    </>
  );
}
