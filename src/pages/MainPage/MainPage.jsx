import './MainPage.scss'
import Robot from '../../components/Robot/Robot'

function MainPage() {
  return (
    <div className="mainpage">
      <section className="mainpage__hero">
        <h1 className="mainpage__title">Hi Kid! <br />Let's practice flying <br />with Pilot
        </h1>
        <p className="mainpage__info mainpage__info--bottom">Learn about AI ethics and prompt engineering to use AI to <br />your advantage.</p>
        <p className="mainpage__info mainpage__info--top">Whenever you’re ready, join us as a CoPilot with Microsoft’s AI <br />companion!</p>
      </section>
      <div className="mainpage__robot">
        <Robot emote="hi"/>
      </div>
    </div>
  )
}

export default MainPage
