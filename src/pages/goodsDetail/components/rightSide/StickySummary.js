import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { VscBookmark } from 'react-icons/vsc';

const StickySummary = ({ data }) => {
  const { eng_name, kor_name, image_list } = data;
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const navigate = useNavigate();

  const goToDeal = e => {
    if (e.target.value === '구매') {
      navigate('/buy');
    } else if (e.target.value === '판매') {
      navigate('/sell');
    }
  };

  const handleScroll = () => {
    if (scrollY >= 300) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div>
      <SummaryWrapper visible={`${scrollActive ? 'yes' : 'no'}`}>
        <GoodsInfoWrapper>
          <GoodsImageWrapper>
            <GoodsImage src={image_list[0]} alt={eng_name} />
          </GoodsImageWrapper>
          <GoodsTextWrapper>
            <GoodsNameEng>{eng_name}</GoodsNameEng>
            <GoodsNameKor>{kor_name}</GoodsNameKor>
          </GoodsTextWrapper>
        </GoodsInfoWrapper>
        <DealBtnsWrapper>
          <BookmarkBtnsWrapper>
            <BookmarkIcon />
            <BookmarkBtnsNums>5,719</BookmarkBtnsNums>
          </BookmarkBtnsWrapper>
          <SalesBtnsWapper>
            {SALES_BUTTON.map(btnData => (
              <SalesButton
                key={btnData.id}
                backgroundColor={btnData.color}
                onClick={goToDeal}
              >
                <BtnsName>{btnData.name}</BtnsName>
                <BtnsPrcieWrapper>
                  <BtnsPriceText>{btnData.price}원</BtnsPriceText>
                  <BtnsPriceState>즉시 {btnData.name}가</BtnsPriceState>
                </BtnsPrcieWrapper>
              </SalesButton>
            ))}
          </SalesBtnsWapper>
        </DealBtnsWrapper>
      </SummaryWrapper>
    </div>
  );
};

const SummaryWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', '', 'space-between')};
  width: 100%;
  padding: ${props => props.theme.paddings.base}
    ${props => props.theme.paddings.xxxl} ${props => props.theme.paddings.large};
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 8px -2px rgb(0 0 0 / 10%);
  position: fixed;
  top: 4.25rem;
  z-index: 1000;

  display: ${props => {
    if (props.visible === 'yes') {
      return 'flex';
    } else {
      return 'none';
    }
  }};
`;

const GoodsInfoWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', 'flex-start', 'flex-start')};
`;

const GoodsImageWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${props => props.theme.colors.lightGray};
  text-align: center;
  margin-right: ${props => props.theme.paddings.base};
  border-radius: 0.75rem;
  overflow: hidden;
`;

const GoodsImage = styled.img`
  width: 120%;
  object-fit: cover;
`;

const GoodsTextWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', 'flex-start', 'flex-start')};
`;

const GoodsNameEng = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
`;

const GoodsNameKor = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const DealBtnsWrapper = styled.div`
  ${props => props.theme.flex.flexBox()}
  width: 35rem;
`;

const BookmarkBtnsWrapper = styled.button`
  ${props => props.theme.flex.flexBox('', 'center', 'center')}
  width: 10rem;
  height: 3.125rem;
  color: ${props => props.theme.colors.black};
  margin-right: ${props => props.theme.margins.small};
  padding: 0 ${props => props.theme.paddings.xxl};
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.lightGray};
  border-radius: 0.625rem;
  cursor: pointer;
`;

const BookmarkIcon = styled(VscBookmark)`
  font-size: ${props => props.theme.fontSizes.base};
`;

const BookmarkBtnsNums = styled.span`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  margin-left: ${props => props.theme.margins.xs};
`;

const SalesBtnsWapper = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', 'space-between')};
  width: 24.5rem;
`;

const SalesButton = styled.button`
  ${props => props.theme.flex.flexBox('', 'center', 'flex-start')};
  width: 12rem;
  height: 3.125rem;
  color: ${props => props.theme.colors.white};
  padding: 0;
  background-color: ${props => props.backgroundColor};
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
`;

const BtnsName = styled.span`
  width: 3.438rem;
  padding: 1.188rem 0;
  margin-right: ${props => props.theme.margins.base};
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 1;
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

const SALES_BUTTON = [
  {
    id: 1,
    name: '구매',
    price: '222,000',
    color: '#ef6253',
  },
  {
    id: 2,
    name: '판매',
    price: '222,000',
    color: '#41b979',
  },
];

export default StickySummary;
