import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import TypeTask from "../types/typeTasks";
import style from "./style.module.scss";

function App() {
  const [tasks, setTasks] = useState<TypeTask[] | []>([]); // ou vai receber um array de TypeTask, ou receberá vazio
  const [selected, setSelected] = useState<TypeTask>();

  function selectTask(selectedTask: TypeTask) {
    setSelected(selectedTask);
    setTasks(oldTask => oldTask.map(item => ({
      ...item,
      selected: item.id === selectedTask.id
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
        tasks={tasks} 
        selectTask={selectTask} 
      />
      <Stopwatch />
    </div>
  );
}

export default App;

// useState para podermos adicionar tarefas novas a partir do estado inicial (que é o array de abjetos dentro de useState)
// 1º INDEX DO ARRAY: estado inicial
// 2º INDEX DO ARRAY: função que vai setar um novo estado a partir do estado anterior