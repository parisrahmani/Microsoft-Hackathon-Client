import "./Copilot.scss";
import { useState } from "react";

function Copilot({ allChats }) {
  const [chatRecord, setChatRecord] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // find chat from copilotChat by matching sam input
    const chat = allChats.find((chat) => chat.Sam === event.target.chat.value);
    if (chat) {
      // if found, push robot and protip chat
      chatRecord.push({
        className: "copilot__sam",
        content: chat.Sam,
      });

      chatRecord.push({
        className: "copilot__pilot",
        content: chat.Chatbot,
      });
      chatRecord.push({
        className: "copilot__protip",
        content: "☆☆☆:  " + chat["Pro Tip"],
      });
      setChatRecord([...chatRecord]);
    }
    // clear input fields
    event.target.chat.value = "";
    // TODO: scroll to bottom
  };

  return (
    <section className="copilot">
      <h3>Are you ready to fly with Pilot?</h3>
      <div>
        <div className="copilot__conversations">
          <p className="copilot__pilot">
            Hey, kid! Welcome on board. What is on your mind?
          </p>
          {chatRecord.map((chat, index) => (
            <div className="copilot__conversation" key={index}>
              <p className={chat.className}>{chat.content}</p>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={handleSubmit} className="copilot__form">
            <input
              className="copilot__input"
              type="text"
              name="chat"
              placeholder="Talk to Pilot..."
            />
            <button type="submit" className="copilot__button">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Copilot;
