import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from '../../uikit/uikit'

const HeaderWrap = styled.header`
    position: relative;
    z-index: 2;
`

const HeaderLogo = styled.img`
    width: 112px;
    margin: 0 auto;
    position: absolute;
    top: 20px;
    left: calc(50% - 112px / 2);
`

const HeaderBurger = styled.div`
    position: fixed;
    top: 30px;
    right: 5%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    span{
        border-radius: 50%;
        width: 6px;
        height: 6px;
        background: #1E1E1E;
        margin: 4px 0 0;
    }
    :first-child{
        margin: 0;
    }
`

const Header:React.FC = () => {
    const Logo = require('../../assets/logo.svg')['default']

    return (
        <HeaderWrap>
            <HeaderLogo src={Logo}/>

            <HeaderBurger>
                <span></span>
                <span></span>
                <span></span>
            </HeaderBurger>
        </HeaderWrap>
    )
}

export default Header