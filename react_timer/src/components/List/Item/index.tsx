import TypeTask from "../../../types/typeTasks";
import style from "../../List/style.module.scss";

interface ItemProps extends TypeTask {
  selectTask: (props: TypeTask) => void;
}

export default function Item({ task, time, selected, completed, id, selectTask }: ItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ''}`} // ternário validando se a task foi selecionado ou não para mudar classe css
      onClick={() => {
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        });
      }}
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
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
