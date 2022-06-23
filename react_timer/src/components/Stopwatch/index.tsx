import Button from "../Button";
import Clock from "./Clock";
import style from "./style.module.scss";
import timeConverter from '../../common/utils/timeConverter'

export default function Stopwatch() {
  console.log(timeConverter('01:00:00'))
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
