import { SignStyle } from './style/Sign'
import { InputDefault } from './Input'
import { Button } from './Button'

function Signin() {

    return (
        <SignStyle>
            <header>
                <h2>WELCOME BACK!</h2>
                <p>Don't have a account, <a href="">Sign up</a></p>
            </header>

            <label>Username</label>
            <InputDefault />
            <label>Password</label>
            <InputDefault type='password' placeholder='●●●●●●●●●' />
            <Button text='Sign In' />

        </SignStyle>
    )
}

export default Signin