import "./Copilot.scss";

function Copilot() {
    return (
      <section className="copilot">
        <h3>Are you ready to fly with Pilot?</h3>
        <div className="copilot-conversation">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Talk to Pilot..."
                />
            </form>
            <button type="send">Send</button>
        </div>
      </section>
    );
  }
  export default Copilot;