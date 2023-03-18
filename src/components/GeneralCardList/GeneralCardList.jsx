import { nanoid } from 'nanoid';

import { Paper } from 'components/Paper';

import dots from 'assets/images/dots.svg'
import style from './GeneralCardList.module.css';

export function GeneralCardList({ list }) {
  return (
    <div className={style.cardList}>
      {list.map((item) => (
          <GeneralCard name={item.name} key={nanoid()} />
      ))}
    </div>
  );
}

function GeneralCard({ name }) {
  return (
    <Paper className={style.generalCardContainer}>
      
        <p>{name}</p>
              <button className={style.generalCardBtn} onClick={'tt' }>
                  <img src={dots} alt="dots" />
        </button>
    
    </Paper>
  );
}
