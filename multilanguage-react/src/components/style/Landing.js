import styled from 'styled-components'

export const LandingStyle = styled.div`

    background: #0F2027;  
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027); 
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027);

    @font-face {
        font-family: 'Augustina';
        font-style: normal;
        font-weight: normal;
        src: local('Augustina'), url('./src/fonts/Agustina-Signature.otf') format('truetype');
    }

    height: 100vh;
    display: grid;
    grid-template-rows: 85px 1fr 65px;

    > header {
        z-index: 1;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        transition: all .2s linear;

        > div {
            margin: 10px 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            img {
                align-self: center;
            }

            h1 {
                font-family: 'Nunito', arial;
                font-weight: 600;
                font-size: 1.9em;
                margin-left: 20px;
                padding-right: 10px;
                align-self: center;
                color: aliceblue;
            }

            :hover {
                cursor: pointer;

            }
        }
    }

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        @import url('https://fonts.googleapis.com/css?family=Exo:400,700');
    }

    footer {
        z-index: 1;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        a {
            text-decoration: none;
            color: aliceblue;
            display: block;
            align-self: center;
        }

        a:nth-child(1) {
            font-family: 'Augustina', serif;
            font-size: 25px;
            margin-left: 20px;
        }

        a:nth-child(2) {
            margin-right: 20px;
            font-family: 'Nunito', arial;
            
        }
    }
`;