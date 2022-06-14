import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../../config';

const DirectBuy = () => {
  const [dealPrice, setDealPrice] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // fetch('/data/goodsData.json')
    fetch(`${BASE_URL}products/${id}`)
      .then(res => res.json())
      .then(res => {
        setDealPrice(res);
      });
  }, [id]);

  return (
    <DealPriceWrapper>
      <DealPriceLabel>즉시 구매가</DealPriceLabel>
      {Object.values(dealPrice).map(data => (
        <DealInputWrapper key={data.id}>
          <PriceWonUnit>{data.buy_now_price}원</PriceWonUnit>
        </DealInputWrapper>
      ))}
      <FinalPriceWrapper>
        <FinalPriceLabel>총 결제금액</FinalPriceLabel>
        <PriceSubmitBtn type="submit">즉시 구매하기</PriceSubmitBtn>
      </FinalPriceWrapper>
    </DealPriceWrapper>
  );
};

const DealPriceWrapper = styled.form`
  ${({ theme }) => theme.flex.flexBox('column', 'flex-start', '')};
`;

const DealPriceLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`;

const DealInputWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('', 'center', 'flex-end')};
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
`;

const PriceWonUnit = styled.p`
width: 100%
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: right;
`;

const FinalPriceWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('column', 'flex-start', '')};
  width: 100%;
`;

const FinalPriceLabel = styled.span`
  padding: ${({ theme }) => theme.paddings.large} 0
    ${({ theme }) => theme.paddings.base};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`;

const PriceSubmitBtn = styled.button`
  width: 100%;
  height: 3.25rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: 0.75rem;
`;

export default DirectBuy;
