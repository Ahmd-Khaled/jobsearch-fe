import Image from "next/image";
import styles from "./styles.module.scss";

const HeaderAuth = () => {
  return (
    <header className={styles.authHeader}>
      <div className={styles.container}>
        <Image src="/images/LI-Logo.png" alt="logo" width={120} height={30} />
      </div>
    </header>
  );
};

export default HeaderAuth;
