import React from 'react';
import styled from 'styled-components';

const GoodsInfo = ({ data }) => {
  const { model_number, release_date, release_price } = data;

  return (
    <InfoWrapper>
      <InfoTitle>상품 정보</InfoTitle>
      <InfoListWrapper>
        <InfoList>
          <InfoItemWrapper>
            <InfoListTitle>모델번호</InfoListTitle>
            <InfoListDesc>{model_number}</InfoListDesc>
          </InfoItemWrapper>
          <InfoItemWrapper>
            <InfoListTitle>출시일</InfoListTitle>
            <InfoListDesc>{release_date}</InfoListDesc>
          </InfoItemWrapper>
          <InfoItemWrapper>
            <InfoListTitle>발매가</InfoListTitle>
            <InfoListDesc>{release_price}원</InfoListDesc>
          </InfoItemWrapper>
        </InfoList>
      </InfoListWrapper>
      <DeliveryWrapper>
        <DeliveryInfo>배송 정보</DeliveryInfo>
        <DeliveryWay>
          <DeliveryIamge
            src="https://kream-phinf.pstatic.net/MjAyMTExMjlfMTQ4/MDAxNjM4MTc4MjI5NTk3.2phJLPtRvFqViNfhZu06HzNRiUBlT4cmZR4_Ukqsyesg.ikrfWOrL7WXCVO0Rqy5kMvOn3B2YpjLUj6RuJqosPX0g.PNG/a_8b54cbca40e945f4abf1ee24bdd031f7.png"
            alt="배송이미지"
          />
          <DeliveryContents>
            <DeliveryTitleWrapper>
              <DeliveryType>일반배송</DeliveryType>
              <DelivertyPrice>3,000원</DelivertyPrice>
            </DeliveryTitleWrapper>
            <DeliveryDesc>검수 후 배송 ・ 5-7일 내 도착 예정</DeliveryDesc>
          </DeliveryContents>
        </DeliveryWay>
      </DeliveryWrapper>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', 'flex-start', 'flex-start')};
  margin-top: ${props => props.theme.margins.xxxl};
`;

const InfoTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  margin-bottom: ${props => props.theme.margins.base};
`;

const InfoListWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', 'flex-start', 'flex-start')};
  width: 100%;
  padding: ${props => props.theme.margins.xl} 0;
  border-top: ${props => props.theme.borders.lightGray};
  border-bottom: ${props => props.theme.borders.lightGray};
`;

const InfoList = styled.dl`
  width: 100%;
  ${props => props.theme.flex.flexBox('', 'flex-start', 'flex-start')};
`;

const InfoItemWrapper = styled.div`
  width: 33.3%;
  word-break: break-word;
  padding: 0 ${props => props.theme.margins.base};
  border-left: ${props => props.theme.borders.lightGray};

  &:nth-child(1) {
    border-left: 0;
    padding-left: 0;
    font-weight: ${props => props.theme.fontWeights.semiBold};
  }
`;

const InfoListTitle = styled.dt`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.light};
`;

const InfoListDesc = styled.dd`
  font-size: ${props => props.theme.fontSizes.small};
  margin-top: ${props => props.theme.margins.xs};
  line-height: 1.063rem;
`;

const DeliveryWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', 'flex-start', 'flex-start')};
`;

const DeliveryInfo = styled.p`
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.regular};
  margin-top: ${props => props.theme.margins.xxxl};
  margin-bottom: ${props => props.theme.margins.xl};
`;

const DeliveryWay = styled.div`
  ${props => props.theme.flex.flexBox()}
  font-size: ${props => props.theme.fontSizes.small};
  padding-bottom: ${props => props.theme.paddings.small};
`;

const DeliveryIamge = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: ${props => props.theme.margins.base};
  border-radius: 100%;
`;

const DeliveryContents = styled.div``;

const DeliveryTitleWrapper = styled.div``;

const DeliveryType = styled.span`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  margin-right: ${props => props.theme.margins.xs};
`;

const DelivertyPrice = styled.span`
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const DeliveryDesc = styled.p`
  color: ${props => props.theme.colors.gray};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

export default GoodsInfo;
