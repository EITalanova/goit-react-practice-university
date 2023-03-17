

import { Paper } from 'components/Paper'
import style from './GeneralCardList.module.css'

export function GeneralCardList({ list }) {
    
    return (
        <div>
            {
                list.map(item => (
                    <GeneralCard name ={item.name}/>
                ))
            }
        </div>
    )
}

function GeneralCard({ name }) {
    return (
        <Paper>
            <div></div>
        </Paper>
    )
}