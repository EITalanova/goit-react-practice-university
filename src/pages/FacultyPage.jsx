import { useSelector } from 'react-redux';

import { Section } from 'components/Section/Section';
import { GeneralCardList } from 'components/GeneralCardList';

import style from './UniversityPage.module.css';

export default function FacultyPage() {

    const faculties = useSelector(state => state.faculty.department)

    return (

        <Section title="Факультети">
            <GeneralCardList className={style.facultyList} list={faculties} isFullItemWidth={true} />
            
    </Section>
)
}