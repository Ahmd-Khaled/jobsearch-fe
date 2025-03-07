import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`mainContainer ${styles.container}`}>Header</div>
    </header>
  );
};

export default Header;
