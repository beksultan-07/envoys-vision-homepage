import styled from "styled-components";
import { Flex } from "../../uikit/uikit";

export const BlockWrap = styled(Flex)`
    width: 100%;
    height: 100vh;
    align-items: center;
    @media(max-width: 768px){
        flex-direction: column;
        margin: 0 0 50px 0;
    }
`


type Props = {
    color: string;
}

export const BlockLeft = styled.div<Props>`
    background: ${props => props.color};
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BlockInfoSide = styled.div<Props>`
    flex: 1;
    height: 100%;
    width: 100%;
    padding: 0 20px;
` 

export const BlockInfoInside = styled(Flex)`
    max-width: 460px;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    justify-content: center;
    @media(max-width: 768px){
        p{
            margin: 15px 0;
        }
    }
`

export const BlockLeftImg = styled.img`
    width: 100%;
    max-width: 600px;
    padding: 60px;
    @media(max-width: 768px){
        padding: 0;
        max-width: 220px; 
    }
`   