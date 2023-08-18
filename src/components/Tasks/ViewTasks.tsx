import { Link, useLocation, NavLink } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import TaskCard from './TaskCard'
import Empty from './Empty.tsx'
import './css/ViewTasks.css'

const ViewTasks = () => {
    const array: number[] = [1, 2, 3, 4, 5]
    const route = useLocation()
    const location = route.pathname.split('/')[2] as string
    console.log(route);


    return (
        (array.length < 1) ?
            <Empty />
            :
            <section id='view_tasks'>
                <div id='view_tasks_header'>
                    <div>
                        <Link to='/dashboard'>
                            <IonIcon icon='arrow-back-outline' />
                        </Link>
                        <p id='section_name'>{location.charAt(0).toUpperCase() + location.substring(1)} Tasks</p>
                    </div>
                    <div id="options">
                        <NavLink to={`/tasks/${location}/todo`}>To Do</NavLink>
                        <NavLink to={`/tasks/${location}/pending`}>In Progress</NavLink>
                        <NavLink to={`/tasks/${location}/done`}>Done</NavLink>
                    </div>
                </div>
                <div className='view_tasks'>
                    {
                        array.map(number => (
                            <TaskCard key={number} />
                        ))
                    }
                </div>
            </section>
    )
}

export default ViewTasks