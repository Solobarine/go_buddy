import './css/TaskCounter.css'

const TaskCounter = () => {
    return (
        <div id='task_counter'>
            <p>Pending Tasks</p>
            <div id='personal_pending'>
                <div></div>
                <small>Personal  12</small>
            </div>
            <div id='team_pending'>
                <div></div>
                <small>Team  8</small>
            </div>

        </div>
    )
}

export default TaskCounter