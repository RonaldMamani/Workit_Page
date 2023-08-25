import styles from "./styles.module.css"

export default function PrincipalTextWhite({text1, textDecoration, text2}) {
    return (
        <h2 className={styles.principal}>{text1}<span className={styles.textDecoration}>{textDecoration}</span>{text2}</h2>
    )
}