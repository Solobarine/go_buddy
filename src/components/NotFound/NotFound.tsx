import { Link } from 'react-router-dom'
import './css/NotFound.css'

const NotFound = () => {
    return (
        <div id='notfound'>
            <img src="/src/assets/facepalming.png" alt="Not Found" />
            <p>Opps. Page Not Found</p>
            <Link to='/dashboard'>Back</Link>
        </div>
    )
}

export default NotFound