import "./Copilot.scss";
function Copilot() {
  return (
    <section className="copilot">
      <h3 className="copilot__title">Are you ready to fly with Pilot?</h3>

      <div>
        <div className="copilot__conversation">
          <p className="copilot__pilot">
            Hey, kid! Welcome on board. What is on your mind?
          </p>
        </div>
        <div className="copilot__form">
          <form>
            <input
              type="text"
              // value={inputValue}
              // onChange={handleChange}
              placeholder="Talk to Pilot..."
              className="copilot__input"
            />
          </form>
          <button type="send" className="copilot__button">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
export default Copilot;
