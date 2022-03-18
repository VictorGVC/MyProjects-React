import styled from 'styled-components'

export const SignScreenStyle = styled.div`

    max-width: 1000px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 350px;
    margin: 10px 30px;

    > div:nth-of-type(2) {
        background: #757F9A; 
        background: -webkit-linear-gradient(to bottom, #B1D0E0, #6998AB); 
        background: linear-gradient(to bottom, #B1D0E0, #6998AB); 

        padding: 60px 0px;
        border-radius: 0px 30px 30px 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-left: 2px;
    }
`;