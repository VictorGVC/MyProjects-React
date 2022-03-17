import { SignScreenStyle } from "./style/SignScreen"
import SignForm from './SignForm'
import BackendSelector from './BackendSelector'

export function SignScreen(props) {

    return (
        <SignScreenStyle>
            <BackendSelector />
            <div>
                <SignForm />
            </div>
        </SignScreenStyle>
    )
}

export default SignScreen