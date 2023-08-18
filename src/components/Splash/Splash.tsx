import { Link } from "react-router-dom"
import './css/Splash.css'

const Splash = () => {
  return (
    <section id="splash">
      <img src="/src/assets/good.svg" />
      <div id='splash_links'>
        <Link id='splash_login' to="/login">Login</Link>
        <Link id='splash_register' to="/register">Register</Link>
      </div>
    </section>
  )
}

export default Splash