import { useState, useRef, MutableRefObject } from 'react'
import { IonIcon } from '@ionic/react'
import { selectType, toggleCreateTask } from '../../utils/CreateTask'
import './css/CreateTask.css'


const CreateTask = (props: {
    element: MutableRefObject<HTMLDivElement>
}) => {

    const [teamSelected, setTeamSelected] = useState<boolean>(false)

    const team = useRef(null) as MutableRefObject<null>
    const personal = useRef(null) as MutableRefObject<null>

    return (
        <div ref={props.element} id='create_task' className='hide'>
            <div onClick={() => toggleCreateTask(props.element)} id="short_line"></div>
            <hr />
            <form action="">
                {teamSelected && <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Name' />
                </div>}
                <div>
                    <label htmlFor="task_title">Task Title</label>
                    <input type="text" name='task_title' placeholder='Task Title' />
                </div>
                <div id='type'>
                    <label>Type</label>
                    <div>
                        <button
                            id='personal'
                            className='type_button unselect'
                            ref={personal}
                            onClick={(e) => selectType(e, setTeamSelected)}><IonIcon icon="person-outline" /> Personal</button>
                        <button
                            id='team'
                            ref={team}
                            className='type_button selected'
                            onClick={(e) => selectType(e, setTeamSelected)}>
                            <IonIcon icon="people-outline" />Team</button>
                    </div>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" placeholder='Task Description'></textarea>
                </div>
                <input type="submit" value="Create" />
            </form>

        </div>
    )
}

export default CreateTask