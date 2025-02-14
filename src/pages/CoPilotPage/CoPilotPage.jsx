import "./CoPilotPage.scss";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function CoPilotPage() {
  const [copilotChat, setCopilotChat] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const getChat = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/chat-bot`);
        console.log(data);
        setCopilotChat(data);
      } catch (err) {
        console.error(err);
      }
    };

    getChat();
  }, []);

  if (!copilotChat) {
    return <>Return Loading...</>;
  }
  return <div>Copilot</div>;
}
export default CoPilotPage;
