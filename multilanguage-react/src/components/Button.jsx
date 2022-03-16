import { ButtonStyle } from "./style/Button"

export function Button(props) {

    const { type = 'none', text = 'OK', 
        radius = '25' } = props

    return (
        <ButtonStyle radius={radius} type={type}>
            {text}
        </ButtonStyle>
    )
}