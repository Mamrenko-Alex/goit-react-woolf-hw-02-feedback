import styles from '../Feedback/Feedback.module.css'

export const Section = ({ title, children }) => {
    return (
        <section>
            <h3 className={styles.headers}>{title}</h3>
            {children}
        </section>
    );
};
