import styles from './Button.module.css'

export default function ResultPage ({children}) {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}