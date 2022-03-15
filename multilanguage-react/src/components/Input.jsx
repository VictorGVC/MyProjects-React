// import { useState } from 'react'

import {InputStyle} from './style/Input'

function Input() {

    return (
        <InputStyle background={'white'}>
            <div>
                <input type="text" placeholder=' '/>
                <label>Username</label>
            </div>
        </InputStyle>
    )
}

export default Input
