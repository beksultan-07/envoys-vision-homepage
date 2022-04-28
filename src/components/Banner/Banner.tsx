import React from 'react'
import { BigTitle } from '../../uikit/fonts'
import { Container, Flex } from '../../uikit/uikit'
import { BannerBtn, BannerFilter, BannerWrap, BannerInside } from './BannerSC'
import Button from '../../uikit/Button'

const Banner:React.FC = () => {
    const icon = require('../../assets/btn.svg')['default']
    return (
        <BannerWrap>
            <Container>
                <BannerInside>
                    <BigTitle margin='0 0 20px 0'>
                        Start forming <br />
                        your <span>cryptocurrency</span> portfolio
                    </BigTitle>
                    <Button href='#' color='#4478BB' text='Exchange' shadow='#003E73'/>
                    <BannerBtn href='#' target='_blank'>
                        <span>DEX</span>
                        <img src={icon} alt="" />
                    </BannerBtn>
                    <BannerBtn href='#' target='_blank'>
                        <span>Processing</span>
                        <img src={icon} alt="" />
                    </BannerBtn>
                </BannerInside>
            </Container>
            <BannerFilter></BannerFilter>  
        </BannerWrap>
    )
}

export default Banner