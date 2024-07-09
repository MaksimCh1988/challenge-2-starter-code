import styles from './Header.module.css';
import sushiImage from '../../assets/sushi.jpg';
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Япона кухня</h1>
        <HeaderCardButton onClick = {props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="Блюда японской кухни" />
      </div>
    </>
  );
};

export default Header;
