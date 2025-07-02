import styles from './Display.module.css';

export default function QuizPage({children}) {
    return (
        <div className={styles.display}>
            {children}
        </div>
    )
}