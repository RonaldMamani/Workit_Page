import styles from "./styles.module.css"

export default function Number({number}) {
    return (
        <span className={styles.number}>{number}</span>
    )
}