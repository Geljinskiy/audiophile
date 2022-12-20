import styles from './Header.module.scss';
import { Container } from '../Container';

const Header = ({ isTransparent = false, }) => {
  return (
    <header className={styles.header}>
      {/* <Container> */}
        <span>audiophile</span>
        <nav>
          <ul>
            <li>Home</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
        </nav>
        <button type="button"></button>
      {/* </Container> */}
    </header>
  );
};

export default Header;
