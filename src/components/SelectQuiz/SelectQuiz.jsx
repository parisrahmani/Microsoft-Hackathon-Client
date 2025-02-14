import "./SelectQuiz.scss";

const SelectQuiz = () => {
  return (
    <>
      <div className="quiz">
        <button className="quiz__type">AI Ethics</button>
        <button className="quiz__type">Prompts Engineering 101</button>
      </div>
    </>
  );
};

export default SelectQuiz;
