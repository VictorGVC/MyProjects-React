import styled from 'styled-components'

export const BackendSelectorStyle = styled.div`
    border-radius: 30px 0px 0px 30px;
    width: 100%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    background: rgba( 255, 255, 255, 0.25);
    backdrop-filter: blur( 7px );
    border: solid 1px rgba( 255, 255, 255, 0.18);
    border-right: 0px;

    h2 {
        text-align: center;
        display: block;
        margin-top: auto;
        margin-bottom: 0px;
        margin-right: 5px;
        font-family: 'Overpass', arial;
    }

    div {
        width: 278px;
    }

    button {
        margin: 30px;
        margin-top: 0px;
        align-self: center;
    }
`;