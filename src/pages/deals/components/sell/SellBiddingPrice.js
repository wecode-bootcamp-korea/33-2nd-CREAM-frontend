import React from 'react';
import styled from 'styled-components';

const SellBiddingPrice = ({ getPriceValue, postWhenSubmit, inputValue }) => {
  return (
    <DealPriceWrapper>
      <DealPriceLabel>판매 희망가</DealPriceLabel>
      <DealInputWrapper>
        <DealPriceInput
          type="text"
          placeholder="희망가 입력"
          onChange={e => getPriceValue(e.target.value)}
        />
        <PriceWonUnit>원</PriceWonUnit>
      </DealInputWrapper>
      <FinalPriceWrapper>
        <FinalPriceLabel>총 결제금액</FinalPriceLabel>
        <PriceSubmitBtn
          type="submit"
          onClick={postWhenSubmit}
          inputValue={inputValue}
        >
          구매 입찰하기
        </PriceSubmitBtn>
      </FinalPriceWrapper>
    </DealPriceWrapper>
  );
};

const DealPriceWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('column', 'flex-start', '')};
`;

const DealPriceLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`;

const DealInputWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox()}
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
`;

const DealPriceInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 0.25rem 0 0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: right;
  border: none;

  ::placeholder {
    color: #d3d3d3;
  }

  &:focus {
    outline: none;
  }
`;

const PriceWonUnit = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
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
  background-color: ${({ inputValue, theme }) =>
    inputValue !== '' ? theme.colors.green : theme.colors.lightGray};
  border: none;
  border-radius: 0.75rem;
`;

export default SellBiddingPrice;
