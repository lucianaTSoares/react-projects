import React from "react";
import style from "./style.module.scss";

// CLASS COMPONENT
// são passadas as props type, que define qual o tipo do botão, e text, para receber o titulo do texto
export default class Button extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
}> {
  render() {
    const { type = "button", text } = this.props; // declaração de props
    return (
      <button type={type} className={style.button}>
        {text}
      </button>
    );
  }
}