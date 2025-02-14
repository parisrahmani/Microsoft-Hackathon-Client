import "./SelectQuiz.scss";

const SelectQuiz = () => {
  return (
    <>
      <div className="quiz">
        <p className="quix__text">Elevate your AI skills!</p>
        <button className="quiz__type">Practice 1: AI ethics</button>
        <button className="quiz__type">
          Practice 2: Prompt Engineering 101{" "}
        </button>
        <div className="quiz__info-text-container">
          <p className="quiz__info-text">
            Learn about AI ethics and prompt engineering to use AI to your
            advantage.{" "}
          </p>
          <p className="quiz__info-text">
            Whenever you’re ready, join us as a CoPilot with Microsoft’s AI
            companion!{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default SelectQuiz;
