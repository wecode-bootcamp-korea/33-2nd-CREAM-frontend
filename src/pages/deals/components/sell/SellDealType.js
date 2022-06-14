import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import DirectSell from '../sell/DirectSell';
import SellBiddingPrice from '../sell/SellBiddingPrice';
import { BASE_URL } from '../../../../config';

const SellDealType = ({ selectedSize }) => {
  const [isSelected, setIsSelected] = useState('즉시 판매');
  const [directPrice, setDirectPrice] = useState({});
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBtnsChange = e => {
    setIsSelected(e.target.name);
  };

  const getPriceValue = e => {
    setInputValue(e);
  };

  const postWhenSubmit = e => {
    fetch(`${BASE_URL}products/${id}/bids?type=buy`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        size_name: selectedSize,
        price: inputValue,
      }),
    });
    alert('성공적으로 판매 입찰되었습니다.');
    navigate(`/products`);
  };

  useEffect(() => {
    // fetch('data/goodsData.json')
    fetch(`${BASE_URL}products/${id}`)
      .then(res => res.json())
      .then(res => setDirectPrice(res.detail));
  }, [id]);

  return (
    <>
      <DirectDealPrice>
        {directPrice.id && (
          <>
            <DirectDealPriceWrapper>
              <DirectDealLabel>즉시 구매가</DirectDealLabel>
              <React.Fragment>{directPrice.buy_now_price}원</React.Fragment>
            </DirectDealPriceWrapper>
            <DirectDealPriceWrapper>
              <DirectDealLabel>즉시 판매가</DirectDealLabel>
              <React.Fragment>{directPrice.sell_now_price}원</React.Fragment>
            </DirectDealPriceWrapper>
          </>
        )}
      </DirectDealPrice>
      <DealTypeWrapper>
        {DEAL_TYPE.map(dealTypeData => (
          <DealTypeBtnContainer key={dealTypeData.id}>
            <DealTypeButton
              focused={isSelected === dealTypeData.name ? 'focused' : null}
              name={dealTypeData.name}
              onClick={handleBtnsChange}
            >
              {dealTypeData.name}
            </DealTypeButton>
          </DealTypeBtnContainer>
        ))}
      </DealTypeWrapper>
      {isSelected === '즉시 판매' ? (
        <DirectSell />
      ) : (
        <SellBiddingPrice
          getPriceValue={getPriceValue}
          postWhenSubmit={postWhenSubmit}
          inputValue={inputValue}
        />
      )}
    </>
  );
};

const DirectDealPrice = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', '')};
  padding: ${({ theme }) => theme.paddings.xxl} 0 1.375rem;
`;

const DirectDealPriceWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('column', '', '')};
  width: 50%;
  text-align: center;

  &:first-child {
    border-right: ${({ theme }) => theme.borders.lightGray};
  }
`;

const DirectDealLabel = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const DealTypeWrapper = styled.ul`
  ${({ theme }) => theme.flex.flexBox('', '', '')};
  width: 100%;
  height: 3.25rem;
  margin-bottom: ${({ theme }) => theme.margins.xxl};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.disabled};
  border-radius: 5rem;
`;

const DealTypeBtnContainer = styled.li`
  width: 50%;
  height: 2.75rem;
  margin: 0.188rem;

  &:first-child {
    margin-right: 0;
  }

  &:last-child {
    margin-left: 0;
  }
`;

const DealTypeButton = styled.button`
  width: 100%;
  height: 2.75rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.small};
  // background-color: transparent;
  background-color: ${props => {
    if (props.focused === 'focused') {
      return props.theme.colors.green;
    } else {
      return 'transparent';
    }
  }};
  ${({ focused, theme }) => {
    if (focused === 'focused') {
      return css`
        background-color: ${theme.colors.green};
        color: ${theme.colors.white};
      `;
    } else {
      return css`
        background-color: transparent;
      `;
    }
  }}
  border: none;
  border-radius: 5rem;
  cursor: pointer;
`;

const DEAL_TYPE = [
  {
    id: 1,
    name: '판매 입찰',
  },
  {
    id: 2,
    name: '즉시 판매',
  },
];

export default SellDealType;
