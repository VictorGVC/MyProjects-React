import styled from 'styled-components'

export const SignStyle = styled.div`

    padding: 0px 15px;
    header {
        margin: 30px 0px;
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
        margin: 20px 0px 10px;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
    }

    p {
        font-size: 1.1em;
        margin-top: 0px;
        font-family: 'Nunito', sans-serif;
        letter-spacing: 1px;
    }

    button {
        margin-top: 35px;
    }
`;