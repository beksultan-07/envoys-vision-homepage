import React from 'react'
import Button from '../../uikit/Button';
import { BlockTitle, BlockText } from '../../uikit/fonts';
import { Flex } from '../../uikit/uikit';
import { BlockWrap, BlockLeft, BlockInfoSide, BlockInfoInside } from './InfoBlockSC';

type Props = {
  color: string;
  title: string;
  text: string;
  btn: string;
  shadow: string;
}

const InfoBlock:React.FC<Props> = (props) => {
  return (
    <BlockWrap>
      <BlockLeft color={props.color}></BlockLeft>
      <BlockInfoSide color={props.color}>
        <BlockInfoInside>
          <BlockTitle color={props.color}>{props.title}</BlockTitle>
          <BlockText margin='30px 0'>{props.text}</BlockText>
          <Button color={props.color} shadow={props.shadow} text='Exchange'/>
        </BlockInfoInside>
      </BlockInfoSide>
    </BlockWrap>
  )
}

export default InfoBlock