import TypeTask from "../../types/typeTasks";
import Item from "./Item";
import style from "./style.module.scss";

interface ListProps {
  tasks: TypeTask[];
  selectTask: (props: TypeTask) => void;
}

// na props task é recebido um array de TypeTask (task, time)
export default function List({ tasks, selectTask }: ListProps) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((element) => (
          <Item
            {...element}
            selectTask={selectTask}
            // desestruturação do element para pegar todas as keys de dentro dos objetos (task, time), que significa a mesma coisa que isso:
            // task={element.task}
            // time={element.time}
          />
        ))}
        {/* utilização do map para buscar os elementos do array e criar um item de lista deles (objetos) */}
        {/* a key funciona como um "ID" para cada li */}
      </ul>
    </aside>
  );
}
