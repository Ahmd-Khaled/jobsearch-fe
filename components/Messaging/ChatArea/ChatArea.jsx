import Image from "next/image";
import styles from "./styles.module.scss";
import UserChat from "../UserChat/UserChat";

const ChatArea = ({ selectedUser }) => {
  console.log("===================  selectedUser:", selectedUser);
  return (
    <div className={styles.chatArea}>
      <div className={styles.selectedAccount}>
        {selectedUser ? (
          <>
            <div className={styles.image}>
              <Image
                src={
                  selectedUser?.profilePic
                    ? selectedUser?.profilePic?.secure_url
                    : "/images/profile-pic.jpg"
                }
                alt="acc"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.selectedName}>{selectedUser?.username}</h3>
          </>
        ) : (
          <p className={styles.noUser}>Select User to chat</p>
        )}
      </div>
      <UserChat selectedUserId={selectedUser?._id} />
      <form className={styles.sendArea}>
        <input
          className={styles.input}
          type="text"
          placeholder="Write a message..."
        />
        <button disabled className={styles.sendBtn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatArea;
