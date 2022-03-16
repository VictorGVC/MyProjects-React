//import { useState } from 'react'

import { InputFloatStyle, InputDefaultStyle } from './style/Input'

export function InputDefault(props) {

    const { type = 'text',
        placeholder = 'VictorGVC' } = props

    return (
        <InputDefaultStyle>
            <input type={type} placeholder={placeholder} />
        </InputDefaultStyle>
    )
}

export function InputFloat(props) {

    const { type = 'text',
        label = 'Username' } = props

    return (
        <InputFloatStyle background={'white'}>
            <input type={type} placeholder=' ' />
            <label>{label}</label>
        </InputFloatStyle>
    )
}

export default InputFloat
