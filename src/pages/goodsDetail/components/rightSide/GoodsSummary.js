import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { VscTriangleDown, VscTriangleUp, VscBookmark } from 'react-icons/vsc';

const GoodsSummary = ({ data }) => {
  const { eng_name, kor_name, recent_price } = data;

  const navigate = useNavigate();

  const goToDeal = e => {
    if (e.target.value === '구매') {
      navigate('buy');
    } else if (e.target.value === '판매') {
      navigate('sell');
    }
  };

  return (
    <SummaryWrapper>
      <GoodsNameEng>{eng_name}</GoodsNameEng>
      <GoodsNameKor>{kor_name}</GoodsNameKor>
      <GoodsSize>
        <GoodsSizeLabel>사이즈</GoodsSizeLabel>
        <GoodsSizeSelect>
          <SizeSelectText>모든 사이즈</SizeSelectText>
          <SizeSelectBtn>
            <VscTriangleDown />
          </SizeSelectBtn>
        </GoodsSizeSelect>
      </GoodsSize>
      <GoodsPriceWrapper>
        <RecentPriceLabel>최근 거래가</RecentPriceLabel>
        <RecentPriceWrapper>
          <RecentPrice>{recent_price}원</RecentPrice>
          <PriceAmountWrapper>
            <PriceAmountIcon />
            <PriceAmount>24,000원 (+10.5%)</PriceAmount>
          </PriceAmountWrapper>
        </RecentPriceWrapper>
      </GoodsPriceWrapper>
      <DealBtnsWrapper>
        {SALES_BUTTON.map(btnData => (
          <SalesButton key={btnData.id} onClick={goToDeal} value={btnData.name}>
            <BtnsName>{btnData.name}</BtnsName>
            <BtnsPrcieWrapper>
              <BtnsPriceText>{btnData.price}원</BtnsPriceText>
              <BtnsPriceState>즉시 {btnData.name}가</BtnsPriceState>
            </BtnsPrcieWrapper>
          </SalesButton>
        ))}
      </DealBtnsWrapper>
      <BookmarkBtnsWrapper>
        <BookmarkIcon />
        <BookmarkBtnsLabel>관심상품</BookmarkBtnsLabel>
        <BookmarkBtnsNums>5,719</BookmarkBtnsNums>
      </BookmarkBtnsWrapper>
    </SummaryWrapper>
  );
};

const SummaryWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', '', 'flex-start')};
  margin-bottom: ${props => props.theme.margins.small};
`;

const GoodsNameEng = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  margin-bottom: ${props => props.theme.margins.xs};
`;

const GoodsNameKor = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.light};
  margin-bottom: ${props => props.theme.margins.xs};
`;

const GoodsSize = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', 'space-between')};
  padding-top: ${props => props.theme.paddings.xl};
  padding-bottom: ${props => props.theme.paddings.base};
  border-bottom: ${props => props.theme.borders.lightGray};
`;

const GoodsSizeLabel = styled.span`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const GoodsSizeSelect = styled.div`
  ${props => props.theme.flex.flexBox()}
`;

const SizeSelectText = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  margin-right: ${props => props.theme.margins.small};
  padding-top: 0.125rem;
`;

const SizeSelectBtn = styled.button`
  ${props => props.theme.flex.flexBox()}
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.gray};
  border-radius: 100%;
  cursor: pointer;
`;

const GoodsPriceWrapper = styled.div`
  ${props => props.theme.flex.flexBox('_', '_', 'space-between')};
  padding-top: ${props => props.theme.paddings.base};
  margin-bottom: ${props => props.theme.margins.xl};
`;

const RecentPriceLabel = styled.span`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const RecentPriceWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', 'flex-end', '_')};
`;

const RecentPrice = styled.span`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;

const PriceAmountWrapper = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'flex-start')};
  color: ${props => props.theme.colors.red};
  margin-top: -0.125rem;
`;

const PriceAmountIcon = styled(VscTriangleUp)`
  font-size: ${props => props.theme.fontSizes.small};
`;

const PriceAmount = styled.span`
  padding-left: ${props => props.theme.margins.xs};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const DealBtnsWrapper = styled.div`
  ${props => props.theme.flex.flexBox()}
`;

const SalesButton = styled.button`
  ${props => props.theme.flex.flexBox('', 'center', 'flex-start')}
  width: 49%;
  height: 3.75rem;
  padding: 0;
  color: ${props => props.theme.colors.white};
  background-color: ${({ value, theme }) =>
    value === '구매' ? theme.colors.red : theme.colors.green};
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;

  &:nth-child(2) {
    margin-left: 0.625rem;
  }
`;

const BtnsName = styled.span`
  width: 3.438rem;
  padding: 1.188rem 0;
  margin-right: ${props => props.theme.margins.base};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  text-align: center;
  border-right: 1px solid rgba(34, 34, 34, 0.1);
`;

const BtnsPrcieWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', 'flex-start', 'flex-start')}
`;

const BtnsPriceText = styled.span`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;

const BtnsPriceState = styled.span`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.light};
`;

const BookmarkBtnsWrapper = styled.button`
  ${props => props.theme.flex.flexBox('', 'center', 'center')}
  width: 100%;
  height: 3.75rem;
  color: ${props => props.theme.colors.black};
  margin-top: ${props => props.theme.margins.base};
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.lightGray};
  border-radius: 0.625rem;
  cursor: pointer;
`;

const BookmarkIcon = styled(VscBookmark)`
  font-size: ${props => props.theme.fontSizes.base};
`;

const BookmarkBtnsLabel = styled.span`
  font-size: ${props => props.theme.fontSizes.base};
  margin-left: ${props => props.theme.margins.xs};
`;

const BookmarkBtnsNums = styled.span`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  margin-left: ${props => props.theme.margins.xs};
`;

const SALES_BUTTON = [
  {
    id: 1,
    name: '구매',
    price: '222,000',
    // color: '#ef6253',
  },
  {
    id: 2,
    name: '판매',
    price: '222,000',
    // color: '#41b979',
  },
];

export default GoodsSummary;
