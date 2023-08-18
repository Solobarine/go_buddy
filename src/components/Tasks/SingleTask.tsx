import { IonIcon } from "@ionic/react"
import { Link } from "react-router-dom"
import { Task } from '../../interface/Task.ts'
import './css/SingleTask.css'

const SingleTask = () => {
    const task: Task = {
        title: 'Lorem ipsum dolor sit amet.',
        date: '10:00 A.M',
        time: '24-06-2023',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, ducimus natus illum voluptatibus tempore aspernatur mollitia, nisi ipsam nesciunt, libero ut. Sunt ex dolorum, officiis minima numquam laborum hic. Maxime, qui. Sapiente suscipit consequatur ipsam odit fugiat non praesentium quo.'
    }

    const check = Object.keys(task).length
    console.log(check);


    return (
        <section id='single_task'>
            <div id='backdrop'>
                <Link to='/tasks/personal'>
                    <IonIcon icon='arrow-back-outline' />
                </Link>
                <p>Details</p>
            </div>
            <div id='title'>
                <p>{task.title}</p>
                <div>
                    <div className='extra_info'>
                        <small>
                            <IonIcon icon="time-outline" />
                            {task.time}
                        </small>
                        <small>
                            <IonIcon icon="calendar-clear-outline" />
                            {task.date}
                        </small>
                    </div>
                </div>
                <IonIcon id='chevron_down' icon="chevron-down-outline" />
            </div>
            <div id='content'>
                <p contentEditable>{task.description}</p>
            </div>
        </section>
    )
}

export default SingleTask