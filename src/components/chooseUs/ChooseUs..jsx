import styles from './ChooseUs.module.css';

const ChooseUs = () => {
    return (
        <>
            <section className={styles.section}>
                <h3>Why choosing us is a good idea</h3>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <h4><span><i className="fa-solid fa-hand-holding-dollar"></i></span>Lowest prices</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laboriosam deleniti eum esse perferendis? Dignissimos. </p>
                    </div>
                    <div className={styles.card}>
                        <h4><span><i className="fa-solid fa-truck"></i></span>Free delivery</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, voluptate quibusdam voluptatem labore soluta in!</p>
                    </div>
                    <div className={styles.card}>
                        <h4><span><i className="fa-solid fa-award"></i></span>Premium quality</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem quam sapiente quis a illum.</p>
                    </div>
                </div>

            </section>
        </>
    ) ;   
};

export default ChooseUs;