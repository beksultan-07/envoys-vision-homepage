import styled from "styled-components";

type Props = {
    margin?: string;
    color?: '#FFA760' | '#fff' | string;
}

export const BigTitle = styled.h1<Props>`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 118px;
    color: ${props => props.color || '#fff'};
    margin: ${props => props.margin || '0px'};
    span{
        color: #4478BB;
    }
    
    @media(max-width: 784px){
        font-size: 76px;
        line-height: 76px;
    }
    @media(max-width: 606px){
        font-size: 48px;
        line-height: 56px;
        font-weight: 600;
    }
    @media(max-width: 400px){
        font-size: 38px;
        line-height: 46px;
    }
`

export const BlockTitle = styled.h2<Props>`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 76px;
    color: ${props => props.color || '#FFA760'};
    margin: ${props => props.margin || '0px'};
    @media(max-width: 370px){
        font-size: 40px;
    }
`

export const BlockText = styled.p<Props>`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: ${props => props.color || '#1E1E1E'};
    margin: ${props => props.margin || '0px'};
    @media(max-width: 400px){
        font-size: 16px;
    }
`