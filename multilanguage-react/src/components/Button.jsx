import { ButtonStyle } from "./style/Button"
import Ripple from 'material-ripple-effects';

export function Button(props) {
    const ripple = new Ripple();

    const { type = 'none', text = 'OK',
        radius = '25', 
        width = '220'} = props

    return (
        <ButtonStyle onMouseDown={(e) => ripple.create(e, 'dark')} 
            radius={radius} 
            type={type}
            width={width} >
            {text}
        </ButtonStyle>
    )
}

export default Button