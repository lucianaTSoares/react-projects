import style from './style.module.scss'

interface ButtonProps {
    text: string
}

export default function Button(props: ButtonProps) {
    return (
        <>
            <button className={style.button}>
                {props.text}
            </button>
        </>
    )
}