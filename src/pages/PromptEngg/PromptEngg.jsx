import { useEffect, useState } from "react";
import axios from "axios";

const PromptEngg = () => {
  const [quiz, setQuiz] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  console.log(API_URL);
  useEffect(() => {
    const getQuiz = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/mqa/propmt-engg`);
        console.log(data);
        setQuiz(data);
      } catch (err) {
        console.error(err);
      }
    };

    getQuiz();
  }, []);
  if (!quiz) {
    return <>Return Loading...</>;
  }
  return (
    <>
      <ul>
        {" "}
        {quiz.map((q, i) => (
          <li key={i}>{q.question}</li>
        ))}
      </ul>
    </>
  );
};

export default PromptEngg;
