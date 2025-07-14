import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.about}>
                        <h2>About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
                            neque ut voluptatibus vitae repudiandae nihil fuga sit aspernatur 
                            itaque sunt!
                        </p>
                        <ul className={styles.iconsContainer}>
                            <li><a href='#'><i className="fa-brands fa-square-facebook"></i></a></li>
                            <li><a href='#'><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href='#'><i className="fa-brands fa-square-github"></i></a></li> 
                        </ul>
                    </div>
                    <div className={styles.quicklinks}>
                        <h2>Support</h2>
                        <ul>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Help</a></li>
                            <li><a href='#'>Contact</a></li> 
                        </ul>
                    </div>
                    <div className={styles.quicklinks}>
                        <h2>Shop</h2>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Shop</a></li>
                            <li><a href='#'>About</a></li>                        
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <h2>Contact Us</h2>
                        <ul className={styles.info}>
                            <li>
                                <span><i className="fa-solid fa-phone"></i></span>
                                <p><a href='tel:+012 345 678 9101'>+012 345 678 9101</a></p>
                                
                            </li>
                            <li>
                                <span><i className="fa-solid fa-envelope"></i></span>
                                <p><a href='mailto:ourfakemail@mail.com'>ourfakemail@mail.com</a></p>                            
                            </li>                                                
                        </ul>
                    </div>
                </div>           
            </footer>
            <div className={styles.copyright}>
                <p>Fake Coffee Shop &copy;2025 Made by Dmitry</p>
            </div>
        </>
    );
};

export default Footer;