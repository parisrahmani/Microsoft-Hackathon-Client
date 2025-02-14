import "./CoPilotPage.scss";
import React from "react";
import axios from "axios";
import Copilot from "../../components/Copilot/Copilot";
import Robot from "../../components/Robot/Robot";
import { useState, useEffect } from "react";

function CoPilotPage() {
  const [allChats, setAllChats] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getChat = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/chat-bot`);
        console.log(data);
        setAllChats(data);
      } catch (err) {
        console.error(err);
      }
    };
    getChat();
  }, []);
  if (!allChats) {
    return <>Loading...</>;
  }

  return (
    <div className="copilot__page">
      <Copilot allChats={allChats} />
      <Robot />
    </div>
  );
}
export default CoPilotPage;
