import styled from "styled-components";
import { Btn } from "../../uikit/Button";
import { Flex } from "../../uikit/uikit";
const bg = require('../../assets/bg.jpg')

export const BannerWrap = styled.section`
    background: url(${bg}) 0 0 / cover;
    height: 100vh;
    padding: 116px 0 0;
    @media(max-height: 600px){
        height: 120vh;
    }
`
export const BannerFilter = styled.div`
    position: absolute;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(20px);
    width: 50vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
`

export const BannerInside = styled(Flex)`
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
    padding: 20px 0;
`

export const BannerBtn = styled.button`
    margin: 20px 0 0;
    outline: none;
    border: 3px solid #FDFDFD;
    height: 55px;
    width: 325px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border-radius: 10px;
    cursor: pointer;
    @media(max-width: 400px){
        width: 290px;
    } 
    span{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
        margin: 0 10px 0 0;
    }
    img{
        width: 43px;
    }
`

