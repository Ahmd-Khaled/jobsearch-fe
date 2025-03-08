"use client";
import { useState } from "react";
import Accounts from "./Accounts/Accounts";
import ChatArea from "./ChatArea/ChatArea";
import styles from "./styles.module.scss";
import Cookies from "js-cookie";

const Messaging = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  let myId;

  if (typeof window !== "undefined") {
    myId = Cookies.get("userId");
  }

  const handleSelectedUser = (user) => {
    setSelectedUser(user);
  };

  // console.log("-------User:", selectedUser);
  return (
    <section className={styles.messaging}>
      <div className={`mainContainer ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.head}>
            <h3 className={styles.title}>Messaging</h3>
          </div>
          <div className={styles.chat}>
            <Accounts
              handleSelectedUser={handleSelectedUser}
              selectedUser={selectedUser}
              myId={myId}
            />
            <ChatArea selectedUser={selectedUser} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messaging;
