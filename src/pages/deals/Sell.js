import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SellSizeButtons from './components/sell/SellSizeButtons';
import SellDealType from './components/sell/SellDealType';
import { BASE_URL } from '../../config';

const Sell = () => {
  const [goodsInfo, setGoodsInfo] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const { id } = useParams();

  const handlePostSize = size => {
    setSelectedSize(size);
  };

  useEffect(() => {
    // fetch('/data/goodsData.json')
    fetch(`${BASE_URL}products/${id}`)
      .then(res => res.json())
      .then(res => {
        setGoodsInfo(res);
      });
  }, [id]);

  return (
    <DealsBackground>
      <ContentsWrapper>
        <PageTitle>판매하기</PageTitle>
        {Object.values(goodsInfo).map(goodsData => (
          <GoodsInfoWrapper key={goodsData.id}>
            <GoodsImageWrapper>
              <GoodsImage
                src={goodsData.image_list[0]}
                alt={goodsData.eng_name}
              />
            </GoodsImageWrapper>
            <GoodsTextWrapper>
              <GoodsNumber>{goodsData.model_number}</GoodsNumber>
              <GoodsNameEng>{goodsData.eng_name}</GoodsNameEng>
              <GoodsNameKor>{goodsData.kor_name}</GoodsNameKor>
            </GoodsTextWrapper>
          </GoodsInfoWrapper>
        ))}
        <SellSizeButtons
          selectedSize={selectedSize}
          handlePostSize={handlePostSize}
        />
        <SellDealType selectedSize={selectedSize} />
      </ContentsWrapper>
    </DealsBackground>
  );
};

const DealsBackground = styled.div`
  height: 1000px;
  margin: 0 auto;
  margin-top: 5rem;
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
  overflow: hidden;
`;

const GoodsImage = styled.img`
  width: 125%;
  object-fit: cover;
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

export default Sell;
