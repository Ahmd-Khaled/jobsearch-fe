"use client";
// import useGetUserChatHistory from "@/hooks/chat/useGetUserChatHistory";
import styles from "./styles.module.scss";

const UserChat = ({ selectedUserId, list }) => {
  // const [chatHistory, loading] = useGetUserChatHistory(selectedUserId);

  // console.log("-------------------chatHistory[0]:", chatHistory[0]);
  // console.log(
  //   "-------------------chatHistory[0]?.messages:",
  //   chatHistory[0]?.messages
  // );

  return (
    <div className={styles.userChat}>
      <ul className={styles.chats}>
        {list ? (
          list.map((message) => (
            <li
              key={message._id}
              className={
                message.senderId._id === selectedUserId
                  ? styles.friendMsg
                  : styles.myMsg
              }
            >
              <div className={styles.msgBox}>
                {/* <span>My: {selectedUserId}</span>
                <span>Sender: {message.senderId._id}</span> */}
                <span>{message.message}</span>
              </div>
            </li>
          ))
        ) : (
          <li className={styles.noMsgs}>
            <span>No messages found, </span>
            <span>Start Chatting...</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default UserChat;
