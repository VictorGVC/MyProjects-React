import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from "./Button";
import { BackendSelectorStyle } from './style/BackendSelector';

const handleDragStart = e => e.preventDefault()

const items = [
    <img src="./src/assets/node-js.png" onDragStart={handleDragStart} role="presentation" />,
    <img src="./src/assets/python.png" onDragStart={handleDragStart} role="presentation" />,
    <img src="./src/assets/java.png" onDragStart={handleDragStart} role="presentation" width={'256px'}/>,
]

export function SignScreen(props) {

    return (
        <BackendSelectorStyle>
            <h2>SELECT BACKEND</h2>
            <AliceCarousel mouseTracking
                items={items}
                paddingLeft={'11'}
                keyboardNavigation={'true'}
                infinite={'true'}
                disableSlideInfo={'false'}
                disableButtonsControls={'true'}
                animationType={'fadeout'}
                    />
            <Button text={'Select'} />
        </BackendSelectorStyle>
    )
}

export default SignScreen