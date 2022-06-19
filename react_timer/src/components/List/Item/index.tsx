import style from '../../List/style.module.scss'

// interface que recebe as props da lista
interface ItemProps {
    task: string
    time: string
}

export default function Item(props: ItemProps) {
    return (
        <>
            <li className={style.item}>
                <h3>{props.task}</h3>
                <span>{props.time}</span>
            </li>
        </>
    )
}

// passa a interface como props no parâmentro da função Item, que posterioirmente é utilizada nos itens da lista



// é possível pegar as props de outras 2 maneiras sem utilizar interface, direto na função:

// 1- export default function Item({ task, time }: { task: string, time: string }) {
//     return (
//         <>
//             <li className={style.item}>
//                 <h3>{task}</h3>
//                 <span>{time}</span>
//             </li>
//         </>
//     )
// }
//
// Dessa forma as props já são desestruturadas, sem precisar criar uma const para declarar elas


// 2- export default function Item(props: { task: string, time: string }) {
//     const { task, time } = props
//     return (
//         <>
//             <li className={style.item}>
//                 <h3>{task}</h3>
//                 <span>{time}</span>
//             </li>
//         </>
//     )
// }
//
// Dessa forma, declaramos em uma const que task e time vem de props