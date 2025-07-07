import { useState, useEffect } from "react";
import styles from "./AiChat.module.css";
import { fetchAIResponse } from "../../api/openai";
import { FiSend } from "react-icons/fi";

const AiChat = ({ onClose, initialPrompt }) => {
  const [messages, setMessages] = useState(() => {
    return initialPrompt
      ? [] // let useEffect handle messages if there's a prompt
      : [{ role: "assistant", content: "Hi! Ask me anything about Hercules!" }];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    if (initialPrompt) {
      const userMsg = { role: "user", content: initialPrompt };
      const newMessages = [userMsg];

      fetchAIResponse(initialPrompt).then((aiReply) => {
        const assistantMsg = { role: "assistant", content: aiReply };
        setMessages([...newMessages, assistantMsg]);
      });
    } else {
      // Reset to default message if no prompt
      setMessages([
        { role: "assistant", content: "Hi! Ask me anything about Hercules!" },
      ]);
    }
  }, [initialPrompt]);

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
              className={
                msg.role === "assistant" ? styles.assistantMsg : styles.userMsg
              }
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
          <button onClick={handleSend} className={styles.sendButton}>
            <FiSend size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
