import { IonIcon } from '@ionic/react'
import InputInterface from '../interface/Input'
import './css/FormInput.css'

const FormInput = (props: {
    fields: InputInterface
}) => {
    return (
        <div className='form_input'>
            <div>
                <IonIcon icon={props.fields.icon} />
                <input type={props.fields.type} name={props.fields.name} placeholder={props.fields.placeholder} required={props.fields.required} />
            </div>
            <small className='errorMessage'>{props.fields.errorMessage}</small>
        </div>
    )
}

export default FormInput