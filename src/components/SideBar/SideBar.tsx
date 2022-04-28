import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../uikit/uikit'

const SideBarWrap = styled.div`
    position: fixed;
    top: 50%;
    left: 5%;
    height: 100%; 
    z-index: 2;
    @media(max-width: 1642px){
        display: none;
    }
`

const SideBarImgs = styled(Flex)`
    flex-direction: column;
`

const SideBarLink = styled.a`
        margin: 16px 0 0;
    :first-child{
        margin: 0;
    }
`

const SideBarImg = styled.img`
    width: 33px ;

`

const SideBarPog = styled.h3`
    width: 150px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #1E1E1E;
    text-align: center;
    margin: 0;
    padding: 0;
    margin-top: 200px;
    border-bottom: 3px solid #1E1E1E;
    transform: rotate(90deg);
`

const SideBar:React.FC= () => {
    const icon1 = require('../../assets/social media icons/Vector.svg')['default']
    const icon2 = require('../../assets/social media icons/Vector-1.svg')['default']
    const icon3 = require('../../assets/social media icons/Vector-2.svg')['default']

    return (
        <SideBarWrap>
            <Flex direction='column' align='center'>
                <SideBarImgs>
                    <SideBarLink href='#'>
                        <SideBarImg src={icon1}/>
                    </SideBarLink>
                    <SideBarLink href='#'>
                        <SideBarImg src={icon2}/>
                    </SideBarLink>
                    <SideBarLink href='#'>
                        <SideBarImg src={icon3}/>
                    </SideBarLink>
                </SideBarImgs>
            </Flex>
        </SideBarWrap>
    )
}

export default SideBar