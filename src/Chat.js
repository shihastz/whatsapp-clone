import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import db from "./firebase";
import { useStatevalue } from "./StateProvider";
import firebase from "firebase";

function Chat() {
  const [{ user }, dispatch] = useStatevalue();
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState();
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input) {
      db.collection("rooms").doc(roomId).collection("messages").add({
        name: user.displayName,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        {messages.length > 0 || roomName !== "" ? (
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        ) : (
          <div><h2 className="chat__default">WhatsApp Web</h2>
          <span className="chat__default_mobile">Open in Desktop Mode</span></div>
        )}
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>
            {messages.length > 0 ? "last seen " : ""}
            {messages.length > 0
              ? new Date(
                  messages[messages.length - 1]?.timestamp?.toDate()
                ).toUTCString()
              : ""}
          </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat__receiver"
            } `}
            key={message.id}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      {messages.length > 0 ? (
        <div className="chat__footer">
          <InsertEmoticonIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
            />
            <button type="submit" onClick={sendMessage}>
              Send a message
            </button>
          </form>
          <MicIcon />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Chat;
