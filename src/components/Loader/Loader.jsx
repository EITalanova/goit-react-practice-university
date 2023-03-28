
import { TailSpin } from 'react-loader-spinner';

import style from './Loader.module.css'

export function Loader() {
    return (
        <div className={style.overlay}>
            <TailSpin size={250} color="#FF6B0A" className={style.loader} />
        </div>
    )
}