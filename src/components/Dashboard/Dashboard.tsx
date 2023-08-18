import { useRef } from 'react'
import { Link } from 'react-router-dom'
import TaskCounter from '../Tasks/TaskCounter'
import TaskCard from '../Tasks/TaskCard'
import CreateTask from '../Tasks/CreateTask'
import { toggleCreateTask } from '../../utils/CreateTask'
import './css/Dashboard.css'

const Dashboard = () => {
    const array: number[] = [1, 2, 3, 4, 5]
    const createTask = useRef<HTMLDivElement>()
    return (
        <section id='dashboard'>
            <div id="welcome">
                <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/guest-male--v3.png" alt="guest-male--v3" />
                <div>
                    <p>Welcome back, Shady !</p>
                    <img src="/src/assets/waving-hand.png" alt="Wave" />
                </div>
            </div>
            <TaskCounter />
            <div id='statistics'>
                <div>
                    <p>12</p>
                    <small>Completed Tasks</small>
                </div>
                <div>
                    <p>8</p>
                    <small>Pending Tasks</small>
                </div>
            </div>
            <div id="tasks">
                <div id='personal_tasks'>
                    <div className='task_head'>
                        <p>Personal Tasks</p>
                        <Link to='/tasks/personal'>View all</Link>
                    </div>
                    <div className='task_cards'>
                        {
                            array.map(number => (
                                <TaskCard key={number} />
                            ))
                        }
                    </div>
                </div>
                <div id='team_tasks'>
                    <div className='task_head'>
                        <p>Team Tasks</p>
                        <Link to='/tasks/team'>View all</Link>
                    </div>
                    <div className='task_cards'>
                        {
                            array.map(number => (
                                <TaskCard key={number} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <input type="submit" id='create_button' value="&#43;" onClick={() => toggleCreateTask(createTask as React.MutableRefObject<HTMLDivElement>)} />
            <CreateTask element={createTask as React.MutableRefObject<HTMLDivElement>} />
        </section>
    )
}

export default Dashboard