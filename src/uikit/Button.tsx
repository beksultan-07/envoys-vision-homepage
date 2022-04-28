import React from 'react'
import styled from 'styled-components'

type BtnPropsStyle = {
    color: string;
    shadow: string;
}

const BtnWrap = styled.a`
    position: relative;
    text-decoration: none;
`

export const Btn = styled.button<BtnPropsStyle>`
    outline: none;
    border: none;
    height: 55px;
    width: 325px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.color};
    border-radius: 10px;
    cursor: pointer;
    z-index: 1;
    position: relative;
    transition: .3s linear;
    :hover{
        transform: translate(9px, 9px);
    }
    @media(max-width: 400px){
        width: 280px;
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

const BtnShodow = styled(Btn)<BtnPropsStyle>`
    background: ${props => props.shadow};
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 0;
`

type BtnProps = {
    color: string;
    text: string;
    shadow: string;
    href: string;
  }

const Button:React.FC<BtnProps> = (props) => {
    const icon = require('../assets/btn.svg')['default']
    return (
      <BtnWrap href={props.href} target='_blank'>
        <Btn color={props.color} shadow={props.shadow}>
          <span>{props.text}</span>
          <img src={icon} alt="" />
        </Btn>
        <BtnShodow color={props.color} shadow={props.shadow}></BtnShodow>
      </BtnWrap>
    )
}

export default Button