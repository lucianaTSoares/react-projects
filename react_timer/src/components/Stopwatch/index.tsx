import Button from "../Button";
import Clock from "./Clock";
import style from "./style.module.scss";
import timeConverter from "../../common/utils/timeConverter";
import TypeTask from "../../types/typeTasks";
import { useEffect, useState } from "react";

interface StopwatchProps {
  selected: TypeTask | undefined;
}

export default function Stopwatch({ selected }: StopwatchProps) {
  const [time, setTime] = useState<number>();

  // o useEffect "observa" a mudança do estado e, sempre que ele mudar, executa uma função fazendo alguma alteração.
  // se comporta como o "observable"
  useEffect(() => {
    // mesma coisa que "if(selecionado && selecionado.tempo)"
    if (selected?.time) {
      setTime(timeConverter(selected.time));
    }
  },[selected]);

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie a cronometragem</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button type="submit" text="Começar" />
    </div>
  );
}
