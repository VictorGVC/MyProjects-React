import { SignStyle } from './style/SignForm'
import { InputDefault } from './Input'
import { Button } from './Button'

function Header(props) {

    return props.sign == 'in' ? (
        <header>
            <h2>WELCOME BACK!</h2>
            <p>Don't have a account, <a href="">Sign up</a></p>
        </header>
    ) : (
        <header>
            <h2>WELCOME!</h2>
            <p>Already have an account, <a href="">Sign in</a></p>
        </header>
    )
}

function SignUp(props) {

    return props.sign == 'up' ? [
        <label>Confirm Password</label>,
        <InputDefault type='password' placeholder='●●●●●●●●●' />
    ] : null
}

function Sign(props) {

    const { sign = 'in' } = props

    return (
        <SignStyle>
            <Header sign={sign} />

            <label>Username</label>
            <InputDefault />
            <label>Password</label>
            <InputDefault type='password' placeholder='●●●●●●●●●' />
            <SignUp sign={sign} />
            <Button text={'Sign ' + sign} />

        </SignStyle>
    )
}

export default Sign
export { Sign }