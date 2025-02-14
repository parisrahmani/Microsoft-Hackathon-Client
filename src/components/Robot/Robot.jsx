import basic from "../../assets/images/Robot-01.png"
import hi from "../../assets/images/Robot-02.png"
import wrong from "../../assets/images/Robot-03.png"
import correct from "../../assets/images/Robot-04.png"
import "./Robot.scss"

const emoteMap = {
    basic: basic,
    hi: hi,
    wrong: wrong,
    correct: correct,
  };

function Robot({ emote }) {
    const imageSrc = emoteMap[emote] || basic;
    return (
        <div className="robot">
            <img className="robot__image" src={imageSrc} alt="robot"/>
        </div>
  )
}

export default Robot
