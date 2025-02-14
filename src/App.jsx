import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import AIEthics from "./pages/AIEthics/AIEthics";
import "./App.scss";
import PromptEngg from "./pages/PromptEngg/PromptEngg";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/ethics" element={<AIEthics />} />
        <Route path="/prompt-engg" element={<PromptEngg />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
