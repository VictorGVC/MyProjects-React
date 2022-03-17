import styled from 'styled-components'

export const SignStyle = styled.div`

    padding: 0px 15px;
    width: min-content;
    header {
        margin: 30px 0px;
        transition: all .1s linear;
    }

    a {
        text-decoration: none;
        font-weight: 700;
        // TODO peak color from props color: {props};
    }

    h2 {
        font-family: 'Overpass', arial;
        font-size: 2em;
        margin: 0px;
    }

    label {
        display: block;
        margin: 20px 0px 10px 4px;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
    }

    p {
        white-space: nowrap;
        font-size: 1.1em;
        margin-top: 0px;
        margin-right: 2px;
        font-family: 'Nunito', sans-serif;
        letter-spacing: 1px;
    }

    button {
        margin: 35px 0px;
    }
`;