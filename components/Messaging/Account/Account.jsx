import Image from "next/image";
import styles from "./styles.module.scss";

const Account = ({ user, clickHandler, selectedUser, myId }) => {
  return (
    <div
      className={
        user._id === selectedUser?.id ? styles.accountActive : styles.account
      }
      onClick={() => clickHandler(user)}
    >
      <div className={styles.acImg}>
        <Image
          src={
            user?.profilePic
              ? user?.profilePic?.secure_url
              : "/images/profile-pic.jpg"
          }
          alt="acc"
          width={56}
          height={56}
        />
      </div>
      <div className={styles.acDet}>
        <h3 className={styles.fName}>{user?.firstName}</h3>
        <h3 className={styles.lName}>
          {user?.lastName} {myId === user._id ? "(You)" : null}
        </h3>
        {/* <h3 className={styles.username}>{user?.username}</h3> */}
      </div>
    </div>
  );
};

export default Account;
