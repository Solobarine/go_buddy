interface InputInterface {
    id: number,
    icon: string,
    type: string,
    name: string,
    placeholder: string,
    required: boolean,
    errorMessage: string
}

export default InputInterface