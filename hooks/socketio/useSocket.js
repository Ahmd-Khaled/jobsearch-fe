"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../functions/baseUrl";

import Cookies from "js-cookie";
import useGetUserChatHistory from "../chat/useGetUserChatHistory";

let token;
let userId;
let role;
if (typeof window !== "undefined") {
  token = Cookies.get("token") || "";
  userId = Cookies.get("userId") || "";
  role = Cookies.get("role") || "";
}

export const useSocket = (selectedUserId) => {
  const [chatHistory, loading] = useGetUserChatHistory(selectedUserId);
  console.log("******* selectedUserId", selectedUserId);
  console.log("******* chatHistory[0]?.messages", chatHistory[0]?.messages);

  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [chatStarted, setChatStarted] = useState(false);

  useEffect(() => {
    setMessages(chatHistory[0]?.messages);
  }, [chatHistory[0]?.messages]);

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io(SOCKET_URL, {
      transports: ["websocket"], // Ensure WebSocket connection works even behind proxies
      auth: {
        auth: `${role} ${token}`,
      },
    });
    setSocket(newSocket);
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("connect", (socket) => {
      console.log("....................Connected to the server");
      //socket.emit("getUserInfo"); // Request user info from server
    });
    // Listen for chat start confirmation
    socket.on("chatStarted", ({ senderId, receiverId, message }) => {
      console.log("-------{ senderId, receiverId, message }:", {
        senderId,
        receiverId,
        message,
      });
      setChatStarted(true);
    });

    // Listen for received messages
    socket.on("receiveMessage", (data) => {
      //   setMessages((prev) => [...prev, data.message]);
      setMessages(data.message);
    });

    // Handle errors
    socket.on("error", (error) => {
      console.error("Socket Error:", error.message);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  // Emit startChat event
  const startChat = (senderId, receiverId, companyId) => {
    socket.emit("startChat", { senderId, receiverId, companyId });
  };

  // Emit sendMessage event
  const sendMessage = (senderId, receiverId, message) => {
    socket.emit("sendMessage", { senderId, receiverId, message });
    console.log("------FE---- Msg Send:", { senderId, receiverId, message });
  };

  return [socket, userId, messages, chatStarted, startChat, sendMessage];
};
