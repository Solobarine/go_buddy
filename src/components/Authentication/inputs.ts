import InputInterface from "../../interface/Input"

export const loginInputs: InputInterface[] = [
    {
        id: 0,
        icon: 'person-outline',
        type: 'text',
        name: 'username',
        placeholder: 'Username',
        required: true,
        errorMessage: 'Username must be 6 - 10 characters long'
    },
    {
        id: 1,
        icon: 'lock-closed-outline',
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        required: true,
        errorMessage: 'Password must be 6 - 15 characters long'
    }
]

export const registerInputs: InputInterface[] = [
    {
        id: 0,
        icon: 'person-outline',
        type: 'text',
        name: 'username',
        placeholder: 'Username',
        required: true,
        errorMessage: 'Username must be 6 - 10 characters long'
    },
    {
        id: 1,
        icon: 'lock-closed-outline',
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        required: true,
        errorMessage: 'Password must be 6 - 15 characters long'
    },
    {
        id: 2,
        icon: 'lock-closed-outline',
        type: 'password',
        name: 'confirm_password',
        placeholder: 'Confirm Password',
        required: true,
        errorMessage: 'Password does not match'
    }
]