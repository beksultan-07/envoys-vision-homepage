import styled from "styled-components";
import { Flex } from "../../uikit/uikit";

export const BlockWrap = styled(Flex)`
    width: 100%;
    height: 100vh;
    align-items: center;
`


type Props = {
    color: string;
}

export const BlockLeft = styled.div<Props>`
    background: ${props => props.color};
    flex: 1;
    height: 100%;
    padding: 0 20px;
    @media(max-width: 652px){
        display: none;
    }
`

export const BlockInfoSide = styled.div<Props>`
    flex: 1;
    height: 100%;
    padding: 0 20px;
` 

export const BlockInfoInside = styled(Flex)`
    max-width: 460px;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    justify-content: center;
`