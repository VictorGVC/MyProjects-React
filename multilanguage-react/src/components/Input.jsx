//import { useState } from 'react'

import { InputFloatStyle, InputDefaultStyle } from './style/Input'

export function InputDefault(props) {

    const { type = 'text',
        placeholder = 'VictorGVC',
        radius = '25' } = props

    return (
        <InputDefaultStyle radius={radius}>
            <input type={type} placeholder={placeholder} />
        </InputDefaultStyle>
    )
}

export function InputFloat(props) {

    const { type = 'text',
        label = 'Username',
        radius = '25',
        background = 'white' } = props

    return (
        <InputFloatStyle background={background} radius={radius}>
            <input type={type} placeholder=' ' />
            <label>{label}</label>
        </InputFloatStyle>
    )
}

export default InputFloat
