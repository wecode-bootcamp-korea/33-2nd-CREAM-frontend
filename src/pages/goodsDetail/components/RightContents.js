import React from 'react';
import styled from 'styled-components';
import DealChecklist from './rightSide/DealChecklist';
import GoodsInfo from './rightSide/GoodsInfo';
import GoodsSummary from './rightSide/GoodsSummary';
import PriceCondition from './rightSide/PriceCondition';

const RightContents = ({ data }) => {
  return (
    <RightContentsWrapper key={data.id}>
      <GoodsSummary data={data} />
      <GoodsInfo data={data} />
      <PriceCondition data={data} />
      <DealChecklist />
    </RightContentsWrapper>
  );
};

const RightContentsWrapper = styled.article`
  width: 50%;
  ${props => props.theme.flex.flexBox('column', '', '')};
  float: right;
  border-left: ${props => props.theme.borders.lightGray};
  padding-left: ${props => props.theme.paddings.xxxl};
`;

export default RightContents;
