import styles from "./styles.module.css"

export default function TextNav({text}) {
    return (
        <p className={styles.textNav}>{text}</p>
    )
}