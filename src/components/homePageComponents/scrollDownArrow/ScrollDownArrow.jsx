import styles from './ScrollDownArrow.module.css';
const ScrollDownArrow = () => {
    return (
        <svg className={styles.arrows}>
            <path className={styles.a1} d="M0 0 L20 12 L40 0"></path>
            <path className={styles.a2} d="M0 20 L20 32 L40 20"></path>
            <path className={styles.a3} d="M0 40 L20 52 L40 40"></path>
        </svg>
    )
};

export default ScrollDownArrow;