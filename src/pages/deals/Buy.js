import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SizeButtons from './components/SizeButtons';
import SelectDealType from './components/SelectDealType';

const Buy = () => {
  const [goodsInfo, setGoodsInfo] = useState([]);

  useEffect(() => {
    fetch('/data/goodsData.json')
      .then(res => res.json())
      .then(res => {
        setGoodsInfo(res);
      });
  }, []);

  return (
    <DealsBackground>
      <ContentsWrapper>
        <PageTitle>구매하기</PageTitle>
        {goodsInfo.map(goodsData => (
          <GoodsInfoWrapper key={goodsData.id}>
            <GoodsImageWrapper>
              <GoodsImage src={goodsData.img_url} alt={goodsData.name_eng} />
            </GoodsImageWrapper>
            <GoodsTextWrapper>
              <GoodsNumber>{goodsData.model_number}</GoodsNumber>
              <GoodsNameEng>{goodsData.name_eng}</GoodsNameEng>
              <GoodsNameKor>{goodsData.name_kor}</GoodsNameKor>
            </GoodsTextWrapper>
          </GoodsInfoWrapper>
        ))}
        <SizeButtons />
        <SelectDealType />
      </ContentsWrapper>
    </DealsBackground>
  );
};

const DealsBackground = styled.div`
  height: 1000px;
  margin: 0 auto;
  padding: ${props => props.theme.paddings.xl}
    ${props => props.theme.paddings.xxxl} 10rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const PageTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  text-align: center;
  margin-bottom: ${props => props.theme.margins.xl};
`;

const ContentsWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', '', '')}
  width: 39.75rem;
  padding: 2rem;
  margin: auto;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
`;

const GoodsInfoWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'flex-start')};
  padding-bottom: ${props => props.theme.paddings.xl};
  border-bottom: ${props => props.theme.borders.lightGray};
`;

const GoodsImageWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${props => props.theme.colors.lightGray};
  text-align: center;
  margin-right: ${props => props.theme.paddings.base};
  border-radius: 0.75rem;
`;

const GoodsImage = styled.img`
  width: 90%;
`;

const GoodsTextWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', 'flex-start', 'flex-start')};
`;

const GoodsNumber = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;

const GoodsNameEng = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
`;

const GoodsNameKor = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

export default Buy;
