
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {

  const [docId] = useState("demo-doc");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(()=>{

    socket.emit("join-document", docId);

    socket.on("receive-changes", (data)=>{
      setContent(data);
    });

    socket.on("chat-message", (msg)=>{
      setChat(prev => [...prev, msg]);
    });

  }, []);

  const handleChange = (e)=>{
    const value = e.target.value;
    setContent(value);

    socket.emit("send-changes", {
      docId,
      content:value
    });
  };

  const sendMessage = ()=>{
    socket.emit("chat-message", {
      docId,
      message
    });
    setMessage("");
  };

  return (
    <div style={{padding:20}}>
      <h1>SyncDoc Collaborative Editor</h1>

      <textarea
        value={content}
        onChange={handleChange}
        rows={10}
        cols={80}
      />

      <h2>Chat</h2>

      <div>
        {chat.map((c,i)=>(
          <div key={i}>{c}</div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>

    </div>
  );
}

export default App;
