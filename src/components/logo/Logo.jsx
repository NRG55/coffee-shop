import styles from './Logo.module.css';
import logo from '/src/images/logo/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className={styles.container}>
            <Link to="/">
                <img src={logo} alt="Logo"/>
            </Link>
        </div>
    );
};

export default Logo;