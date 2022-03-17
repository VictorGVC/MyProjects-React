import styled from 'styled-components'

export const SignScreenStyle = styled.div`

    max-width: 1000px;
    display: grid;
    background-color: blue;
    grid-template-columns: 1fr 350px;

    > div:nth-of-type(2) {
        padding: 60px 0px;
        border-radius: 0px 30px 30px 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: blue;
    }
`;