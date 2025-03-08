import Image from "next/image";
import styles from "./styles.module.scss";
import { FaHome } from "react-icons/fa";
import { TbMessageFilled } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`mainContainer ${styles.container}`}>
        <div className={styles.hStart}>
          <Image src="/images/linkedin.png" width={36} height={36} alt="logo" />
        </div>
        <div className={styles.hEnd}>
          <nav className={styles.nav}>
            <div className={styles.navItem}>
              <FaHome />
              <span>Home</span>
            </div>
            <div className={styles.navItem}>
              <TbMessageFilled />
              <span>Messaging</span>
            </div>
            <div className={styles.navItem}>
              <IoNotifications />
              <span>Notifications</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
