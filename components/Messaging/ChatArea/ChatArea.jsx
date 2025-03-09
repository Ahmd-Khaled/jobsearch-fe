"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import UserChat from "../UserChat/UserChat";
import { useSocket } from "@/hooks/socketio/useSocket";
import { useEffect, useState } from "react";

const ChatArea = ({ selectedUser }) => {
  // console.log("===================  selectedUser:", selectedUser);
  const [socket, userId, messages, chatStarted, startChat, sendMessage] =
    useSocket(selectedUser?._id);

  console.log("-------------- Chat Started:", chatStarted);
  console.log("-------|||------- Messages:", messages);
  const [input, setInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    setIsDisabled(!chatStarted);
  }, [socket]);

  const handleStartChat = () => {
    startChat(userId, selectedUser._id, "67c4dea97f06675e5aa88ee3"); // (senderId, receiverId, companyId)
  };

  const onChange = (e) => {
    handleStartChat();
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage(userId, selectedUser._id, input);
      setInput("");
    }
  };

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
      <UserChat selectedUserId={selectedUser?._id} list={messages} />
      <form className={styles.sendArea}>
        <input
          className={styles.input}
          type="text"
          placeholder="Write a message..."
          value={input}
          onChange={(e) => onChange(e)}
        />
        <button
          type="button"
          onClick={handleSendMessage}
          disabled={!chatStarted}
          className={styles.sendBtn}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatArea;
