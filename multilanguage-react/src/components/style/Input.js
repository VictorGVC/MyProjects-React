import styled from 'styled-components'

export const InputStyle = styled.div`
    position: relative;
    padding-top: 13px;

    > * input {
        border: 1px solid lightgrey;
        border-radius: 20px;
        outline: none;
        min-width: 150px;
        padding: 12px 20px;
        font-size: 13px;
        transition: all .07s linear;

        :focus {
            border: 2px solid #3951b2;

            :required:invalid{
                border: 2px solid red
            }

            + label{
                font-size: 12px;
                top: 0;
                color: #3951b2;;
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
                color: #3951b2;;
        }
    }

    > * label {
        pointer-events: none;
        position: absolute;
        top: calc(50% - 8px);
        left: 20px;
        transition: all .07s linear;
        background-color: ${props => props.background};
        padding: 5px;
        box-sizing: border-box;
    }
`;