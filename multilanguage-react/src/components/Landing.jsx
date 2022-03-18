import React from 'react'
import { LandingStyle } from './style/Landing'
import SignScreen from './SignScreen'

export function Landing(props) {
    const { animation = false } = props

    return (
        <LandingStyle>
            <header>
                <div>
                    <img src="./src/assets/globo64.png" alt="Logo" />
                    <h1>Multilanguage App</h1>
                </div>

                <nav>

                </nav>
            </header>

            <div>
                <SignScreen />
            </div>

            <footer>
                <a target="_blank" href="https://github.com/VictorGVC">Victor V. Costa</a>
                {/* TODO create help screen */}
                <a target="_blank" href="">Help</a>

            </footer>
        </LandingStyle>
    )
}

export default Landing
