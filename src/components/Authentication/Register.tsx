import { Link } from 'react-router-dom'
import { registerInputs } from './inputs'
import FormInput from '../FormInput'
import './css/Register.css'

const Register = () => {
    return (
        <section id="register">
            <div id="register_image">
                <img src="/src/assets/clock-and-calender.png" alt="" /></div>
            <form action="POST">
                {
                    registerInputs.map(input => (
                        <FormInput
                            key={input.id}
                            fields={input} />
                    ))
                }
                <input type="submit" value="Register" />
            </form>
            <p id='login_option'>Already a User? <Link to='/login'>Login</Link></p>
        </section>
    )
}

export default Register