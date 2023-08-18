import { IonIcon } from '@ionic/react'
import './css/Header.css'

const Header = () => {
    return (
        <nav id='phone_header'>
            <p id="time">9:38</p>
            <div>
                <IonIcon icon="wifi-outline" />
                <IonIcon icon="battery-full-outline" />
            </div>
        </nav>
    )
}

export default Header