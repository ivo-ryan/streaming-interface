import { styled } from "styled-components";

export const IsLoading = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10%;
        padding: 30px 0;

        svg{
            font-size: 90px;
            animation: rotate .1s linear infinite;
            color:  #23e1fe ;
            filter: drop-shadow( 0  0  10px #17a2b8);

            @keyframes rotate {
                to{
                    transform: rotate(360deg);
                }
            }
        }
`;