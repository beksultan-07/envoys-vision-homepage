import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from '../../uikit/uikit'

const FooterWrap = styled.footer`
    background: #002A4E;
    padding: 35px 0 25px;
`
const FooterLogo = styled.img`
    width: 100px;
    margin: 0 0 20px;
`
const FooterLinks = styled.nav`
    display: flex;
    align-items: center;
    @media(max-width: 444px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
`
const FooterLink = styled.a`
    text-decoration: none;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #FDFDFD;
    margin: 0 42px 0 0;
    :last-child{
        margin: 0;
    }
    @media(max-width: 444px){
        margin: 0;
        text-align: center;
    }
`
const FooterBottom = styled.div`
    border-top: 1px solid #FFFFFF;
    margin: 47px 0 0;
    padding: 25px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const FooterBottomText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #D9DBE1;
`
const FooterIconWrap = styled.a`
    background: #ffffff30;
    border-radius: 50%;
    padding: 5px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 16px 0 0;
    :last-child{
        margin: 0;
    }
`
const FooterIcon = styled.img`
    width: 20px;
`

const Footer:React.FC = () => {
    const Logo = require('../../assets/logo.svg')['default']
    const Icon1 = require('../../assets/social media icons/footer/Path.svg')['default']
    const Icon2 = require('../../assets/social media icons/footer/Path-2.svg')['default']
    const Icon3 = require('../../assets/social media icons/footer/Path-3.svg')['default']

    return (
            <FooterWrap>
                <Container>
                    <Flex direction='column' align='center'>
                        <FooterLogo src={Logo}/>
                        <FooterLinks>
                            <FooterLink href='#'>Exchange</FooterLink>
                            <FooterLink href='#'>DEX</FooterLink>
                            <FooterLink href='#'>Processing</FooterLink>
                            <FooterLink href='#'>Contact</FooterLink>
                        </FooterLinks>
                    </Flex>
                    <FooterBottom>
                        <FooterBottomText>© 2022 Envoys Vision. All rights reserved</FooterBottomText>
                        <Flex>
                            <FooterIconWrap href='#'>
                                <FooterIcon src={Icon1}/>
                            </FooterIconWrap>
                            <FooterIconWrap href='#'>
                                <FooterIcon src={Icon2}/>
                            </FooterIconWrap>
                            <FooterIconWrap href='#'>
                                <FooterIcon src={Icon3}/>
                            </FooterIconWrap>
                        </Flex>
                    </FooterBottom>
                </Container>
            </FooterWrap>
      )
}

export default Footer