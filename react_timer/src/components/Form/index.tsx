import Button from "../Button";
import style from './style.module.scss'

export default function Form() {
    return (
        <form className={style.newTask}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Tarefa:</label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa"
                    placeholder="O que você quer estudar hoje?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo:</label>
                <input 
                    type="time"
                    step={1}
                    name="tempo"
                    id="tempo"
                    min={"00:00:00"} //tempo mínimo que aparece no relógio
                    max={"01:30:00"} //tempo mínimo que aparece no relógio
                    required
                />
            </div>
            <Button text={"Adicionar"}/>
        </form>
    )
}