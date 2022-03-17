import styled from 'styled-components'

export const ButtonStyle = styled.button`

    border: 1px solid lightgrey;
    border-radius: ${props => props.radius+'px'};
    outline: none;
    min-width: 222px;
    width: ${props => props.width+'px'};
    padding: 12px 20px;
    font-size: 15px;
    transition: all .2s linear;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    box-sizing: content-box;
    
    :hover {
        cursor: pointer;
        border-radius: ${props => props.radius-10+'px'};
    }
`;