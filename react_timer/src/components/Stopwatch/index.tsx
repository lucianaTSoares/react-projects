import Button from '../Button'
import Clock from './Clock'
import style from './style.module.scss'

export default function Stopwatch() {
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie a cronometragem</p>
            <div className={style.clockWrapper}>
                <Clock/>
            </div>
            <Button 
                type='submit'
                text='Começar'/>
        </div>
    )
}