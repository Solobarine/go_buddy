import { IonIcon } from '@ionic/react'
import './css/TaskCard.css'
import { Link } from 'react-router-dom'

const TaskCard = () => {
    return (
        <Link id='task_card' to='/tasks/task/1'>
            <div className='taskcard'>
                <p id="title">Lorem ipsum dolor sit.</p>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in vel nostrum nam! Totam, perspiciatis.</small>
                <div>
                    <small id="name">Lorem ipsum.</small>
                    <div className='extra_info'>
                        <small>
                            <IonIcon icon="time-outline" />
                            10:00 A.M
                        </small>
                        <small>
                            <IonIcon icon="calendar-clear-outline" />
                            24-06-2023
                        </small>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TaskCard