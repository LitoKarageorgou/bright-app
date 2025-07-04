import { useState } from "react";
import styles from "./AiChat.module.css";
import { fetchAIResponse } from "../api/openai";


const AiChat = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! Ask me anything about Hercules!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
  if (!input.trim()) return;

  const userMsg = { role: "user", content: input };
  setMessages((prev) => [...prev, userMsg]);
  setInput("");

  const aiReply = await fetchAIResponse(input);
  const assistantMsg = { role: "assistant", content: aiReply };
  setMessages((prev) => [...prev, assistantMsg]);
};

  return (
    <div className={styles.chatOverlay}>
      <div className={styles.chatBox}>
        <div className={styles.chatHeader}>
          <span>AI Assistant</span>
          <button onClick={onClose}>×</button>
        </div>

        <div className={styles.messages}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.role === "assistant" ? styles.assistantMsg : styles.userMsg}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <div className={styles.inputRow}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AiChat;