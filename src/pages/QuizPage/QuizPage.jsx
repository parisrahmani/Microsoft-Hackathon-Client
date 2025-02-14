import SelectQuiz from "../../components/SelectQuiz/SelectQuiz";
import Robot from "../../components/Robot/Robot";
import "./QuizPage.scss";

const QuizPage = () => {
  return (
    <div className="quiz-page">
      <SelectQuiz />
      <div className="quiz-page__robot">
        <Robot emote="basic" />
      </div>
    </div>
  );
};

export default QuizPage;
