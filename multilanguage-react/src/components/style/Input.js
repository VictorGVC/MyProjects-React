import styled from 'styled-components'

export const InputDefaultStyle = styled.div`
    
    input {
        border: 1px solid lightgrey;
        border-radius: 25px;
        outline: none;
        min-width: 200px;
        padding: 12px 20px;
        font-size: 14px;
        transition: all .07s linear;
        font-family: 'Nunito', sans-serif;
        :focus {
            border: 2px solid #3951b2;

            :required:invalid{
                border: 2px solid red;
            }
        }
    }
`;

export const InputFloatStyle = styled(InputDefaultStyle)`
    position: relative;
    padding-top: 13px;

    input {
        :focus {
            + label{
                font-size: 12px;
                top: 0;
                color: #3951b2;
            }
        }

        ::placeholder{
            color: transparent;
        }

        :required:invalid{
            + label {
                color: red;
                :before {
                    content: '*';
                }
            }
        }

        :not(:placeholder-shown) + label{
            font-size: 12px;
                top: 0;
                color: #3951b2;
        }
    }

    label {
        pointer-events: none;
        position: absolute;
        top: calc(50% - 8px);
        left: 20px;
        transition: all .07s linear;
        background-color: ${props => props.background};
        padding: 3px;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
`;