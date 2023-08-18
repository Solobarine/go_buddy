import { Link } from 'react-router-dom'
import { loginInputs } from './inputs'
import FormInput from '../FormInput'

import './css/Login.css'

const Login = () => {
    return (
        <section id='login'>
            <div id="login_image">
                <img src="/src/assets/social-planner.png" alt="Login Image" />
            </div>
            <form action="POST">
                {
                    loginInputs.map(input => (
                        <FormInput
                            key={input.id}
                            fields={input} />
                    ))
                }
                <input type="submit" value="Login" />
            </form>
            <p id='register_option'>Dont have an account? <Link to='/register'>Register</Link></p>

        </section>
    )
}

export default Login