import { MutableRefObject } from "react";

export const selectType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, setState: React.Dispatch<React.SetStateAction<boolean>>) => {
    e.preventDefault();

    const elements = Array.from(document.getElementsByClassName('type_button'))

    const clickedButton = e.target as Element
    elements.forEach(element => {
        element.classList.remove('selected')
        if (element !== clickedButton) {
            element.classList.add('unselect')
        } else {
            element.classList.remove('unselect')
            element.classList.add('selected')
        }
    });

    (clickedButton.getAttribute('id') === 'team') ? setState(false) : setState(true)
}

export const toggleCreateTask = (element: MutableRefObject<HTMLDivElement>) => {
    element.current.classList.toggle('hide')
    element.current.classList.toggle('show')
}