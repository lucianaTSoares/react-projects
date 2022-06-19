import { useState } from 'react'
import Item from './Item'
import style from './style.module.scss'

export default function List() {

    // useState para podermos adicionar tarefas novas a partir do estado inicial (que é o array de abjetos dentro de useState)
    // 1º INDEX DO ARRAY: estado inicial
    // 2º INDEX DO ARRAY: função que vai setar um novo estado a partir do estado anterior
    const [tasks, setTasks] = useState([
        {
            task: 'React',
            time: '02:00:00'
        },
        {
            task: 'Typescript',
            time: '01:30:00'
        },
        {
            task: 'Javascript',
            time: '00:30:00'
        }
    ]) 

    return (
        <aside className={style.taskList}>
            <h2 onClick={() => {
                setTasks([...tasks, {task: 'Estado', time: '00.05.00'}])
            }}>Estudos do dia</h2>
            <ul>
                {tasks.map((element, index) => (
                    <Item
                        key={index}
                        {...element} 
                        
                        // desestruturação do element para pegar todas as keys de dentro dos objetos (task, time), que significa a mesma coisa que isso:
                        // task={element.task}
                        // time={element.time}
                    />
                ))}
                {/* utilização do map para buscar os elementos do array e criar um item de lista deles (objetos) */}
                {/* a key funciona como um "ID" para cada li */}
            </ul>
        </aside>
    )
}