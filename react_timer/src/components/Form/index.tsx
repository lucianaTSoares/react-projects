import React from "react";
import TypeTask from "../../types/typeTasks";
import Button from "../Button";
import style from "./style.module.scss";
import { v4 as uuidv4 } from "uuid";

// CLASS COMPONENT || FORM CONTROLADO
// React.Dispatch<React.SetStateAction é o tipo do setTask mostrado no App.tsx
export default class Form extends React.Component< {setTasks: React.Dispatch<React.SetStateAction<TypeTask[]>>} > {
  
  state = {
    task: "",
    time: "00:00",
  }; // estado inicial

  createTask(e: React.FormEvent) {
    e.preventDefault(); // utilizado para previnir um refresh na página quando essa função é executada
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]); // seta as tasks antigas + as atuais; essa função já recebe como parâmetro (oldTask) o estado antigo
    this.setState({ task: "", time: "00:00" }); // coloca como vazio após criarmos uma task
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.createTask.bind(this)}>
        {/* onSubmit: servirá para pegar o estado e mandar para outro lugar (list) */}
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Tarefa:</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar hoje?"
            value={this.state.task} // estado atual do input
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            } // estado que permite a mudança do input, sempre pegando o valor do evento
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
            value={this.state.time} // estado atual do input
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            } // estado que permite a mudança do input, sempre pegando o valor do evento
            required
          />
        </div>
        <Button type="submit" text="Adicionar" />
      </form>
    );
  }
}
