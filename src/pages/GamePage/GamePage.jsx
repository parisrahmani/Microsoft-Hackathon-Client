import "./GamePage.scss";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Robot from "../../components/Robot/Robot";
import { Link } from "react-router-dom";

function GamePage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [hideIncorrectOptions, setHideIncorrectOptions] = useState(false);
  const [robotEmote, setRobotEmote] = useState("basic");
  const params = useParams();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;

  const getQuestions = async () => {
    try {
      const response =
        params.quizid === "1"
          ? await axios.get(`${baseUrl}/mqa/ai-ethics`)
          : await axios.get(`${baseUrl}/mqa/prompt-engg`);
      setQuestions(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        navigate("/not-found");
      } else {
        console.error("Error fetching questions:", error);
      }
    }
  };

  useEffect(() => {
    getQuestions();
  }, [params.quizid]);

  const handleOptionClick = (option) => {
    if (showExplanation) return; // Prevent further clicks after the explanation is shown
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.correct_answer) {
      setSelectedOption(option);
      setRobotEmote("correct");
      setTimeout(() => {
        setShowExplanation(true);
        setHideIncorrectOptions(true);
      }, 1200); // Short delay for visual effect
    } else {
      setSelectedOption(option); // Mark the incorrect option
      setRobotEmote("wrong");
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
      setHideIncorrectOptions(false);
      setRobotEmote("basic");
    } else {
      setCurrentQuestionIndex(null); // Indicate the end of the quiz
    }
  };

  const renderGameEndScreen = () => (
    <section className="game-page">
      <div className="game-end">
        <h2> Great job! Look - Pilot loves you more! </h2>

        <div className="game-end__options">
          <Link to="/quiz/1">
            <button onClick={() => navigate("/quiz/1")} className="quiz__type">
              Practice 1: AI Ethics
            </button>
          </Link>
          <Link to="/quiz/2">
            <button
              onClick={() => navigate("/quiz/2")}
              className="
            quiz__type"
            >
              Practice 2: Prompt Engineering 101
            </button>
          </Link>
          <div className="game-end__text">
            <p>
              Learn about AI ethics and prompt engineering to use AI to your
              advantage.
            </p>
            <p>
              Whenever you’re ready, join us as a CoPilot with Microsoft’s AI
              companion!
            </p>
          </div>
        </div>
      </div>
      <div className="game-page__robot">
        <Robot emote="basic2" />
      </div>
    </section>
  );

  if (questions.length === 0) return <p>Loading...</p>;
  if (currentQuestionIndex === null) return renderGameEndScreen();

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <section className="game-page">
      <main className="game">
        <h1 className="game__title">
          {params.quizid === "1"
            ? "Practice 1: AI Ethics"
            : "Practice 2: Prompt Engineering 101"}
        </h1>
        <div className="game__question-container">
          <h5 className="game__question-number">
            Question {currentQuestionIndex + 1}/{questions.length}
          </h5>
          <p className="game__question">{currentQuestion.question}</p>
          <div className="game__choices-container">
            {currentQuestion.options.map((option, index) => (
              <p
                key={index}
                className={`game__choices ${
                  selectedOption === option
                    ? option === currentQuestion.correct_answer
                      ? "correct"
                      : "incorrect"
                    : ""
                } ${
                  hideIncorrectOptions &&
                  option !== currentQuestion.correct_answer
                    ? "hidden"
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </p>
            ))}
          </div>
        </div>
        {showExplanation && (
          <div className="game__lower-container">
            <p className="game__explanation">{currentQuestion.explanation}</p>
            <button className="game__next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        )}
      </main>
      <div className="game-page__robot">
        <Robot emote={robotEmote} />
      </div>
    </section>
  );
}

export default GamePage;
