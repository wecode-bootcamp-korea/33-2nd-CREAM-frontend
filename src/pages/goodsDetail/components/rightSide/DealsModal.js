import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { VscTriangleDown } from 'react-icons/vsc';

const DealsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [goodsData, setGoodsData] = useState();
  const [graphData, setgraphData] = useState();

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // fetch('/data/goodsData.json')
    fetch('http://13.125.248.213:8000/products/1')
      .then(res => res.json())
      .then(res => setGoodsData(res));
  }, []);

  useEffect(() => {
    // fetch('/data/graphData.json')
    fetch('http://13.125.248.213:8000/products/1/orders')
      .then(res => res.json())
      .then(res => {
        setgraphData(res.orders);
      });
  }, []);

  return (
    <ModalWrapper>
      <ItemMoreBtn onClick={handleModal}>
        {isOpen === false ? '체결 내역 더보기' : '체결 내역 더보기'}
      </ItemMoreBtn>

      {isOpen === false ? null : (
        <ModalBackground onClick={handleModal}>
          <ModalView>
            <ModalTitle>시세</ModalTitle>
            <ModalGoodsWrapper>
              {Object.values(goodsData).map(data => (
                <ModalGoodsInfo key={data.id}>
                  <ModalGoodsImg src={data.image_list[0]} />
                  <ModalGoodsInfoWrap>
                    <ModalGoodsInfoTextWrap>
                      <ModalGoodsNameEng>{data.eng_name}</ModalGoodsNameEng>
                      <ModalGoodsNameKor>{data.kor_name}</ModalGoodsNameKor>
                    </ModalGoodsInfoTextWrap>
                    <GoodsSizeSelect>
                      <SizeSelectText>모든 사이즈</SizeSelectText>
                      <SizeSelectBtn>
                        <VscTriangleDown />
                      </SizeSelectBtn>
                    </GoodsSizeSelect>
                  </ModalGoodsInfoWrap>
                </ModalGoodsInfo>
              ))}
            </ModalGoodsWrapper>
            <GraphTabWrapper>
              {GRAPH_MENU_TAB.map(data => (
                <GraphTabBtn key={data.id}>{data.tabName}</GraphTabBtn>
              ))}
            </GraphTabWrapper>
            <GraphItemWraper>
              <GraphItemLabel>
                {GRAPH_ITEM_LABEL.map(data => (
                  <GprahItemTitle key={data.id}>
                    {data.labelName}
                  </GprahItemTitle>
                ))}
              </GraphItemLabel>
              {graphData.map(data => (
                <GraphItemList key={data.id}>
                  <GraphItem>{data.size}</GraphItem>
                  <GraphItem>{`${data.price.toLocaleString()}원`}</GraphItem>
                  <GraphItem>{data.created_at}</GraphItem>
                </GraphItemList>
              ))}
            </GraphItemWraper>
          </ModalView>
        </ModalBackground>
      )}
    </ModalWrapper>
  );
};
const ModalWrapper = styled.div``;

const ItemMoreBtn = styled.button`
  width: 35rem;
  height: 2.625rem;
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.lightGray};
  border-radius: 0.75rem;
  cursor: grab;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalView = styled.div`
  width: 30rem;
  height: 35.513rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 1rem;
  padding: ${props => props.theme.paddings.xl} 2rem;
  padding-bottom: 2rem;
`;

const ModalTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  text-align: center;
  margin-bottom: ${props => props.theme.margins.xl};
`;

const ModalGoodsWrapper = styled.div`
  margin-bottom: ${props => props.theme.margins.base};
`;

const ModalGoodsInfo = styled.div`
  ${props => props.theme.flex.flexBox('', 'flex-start', '')};
`;

const ModalGoodsImg = styled.img`
  width: 5.4rem;
  height: 5.4rem;
  margin-right: ${props => props.theme.margins.small};
  border-radius: 0.625rem;
  background-color: ${props => props.theme.colors.lightGray};
`;

const ModalGoodsInfoWrap = styled.div`
  ${props => props.theme.flex.flexBox('column', 'flex-start', 'flex-start')};
`;

const ModalGoodsInfoTextWrap = styled.div`
  ${props => props.theme.flex.flexBox('column', 'flex-start', 'flex-start')};
`;

const ModalGoodsNameEng = styled.span`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const ModalGoodsNameKor = styled.span`
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.light};
  margin-top: -0.188rem;
`;

const GoodsSizeSelect = styled.div`
  ${props => props.theme.flex.flexBox()};
  height: 2.5rem;
  margin-top: 0.45rem;
  padding-left: ${props => props.theme.paddings.base};
  padding-right: ${props => props.theme.paddings.xs};
  border: ${props => props.theme.borders.lightGray};
  border-radius: 0.75rem;
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

const GraphTabWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', '', 'space-between')};
  width: 26rem;
  padding: 0.125rem;
  background-color: ${props => props.theme.colors.lightGray};
  margin-top: ${props => props.theme.margins.xl};
  border-radius: 0.5rem;
  over-flow: hidden;
`;

const GraphTabBtn = styled.button`
  width: 33.3%;
  height: 1.75rem;
  color: ${props => props.theme.colors.darkGray};
  background-color: transparent;
  font-size: ${props => props.theme.fontSizes.xs};
  text-align: center;
  padding: ${props => props.theme.paddings.small};
  border: 0;
  border-radius: 0.375rem;
  cursor: pointer;

  &:nth-child(1) {
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fontWeights.semiBold};
    background-color: ${props => props.theme.colors.white};
  }
`;

const GraphItemWraper = styled.ul`
  width: 26rem;
  height: 21.25rem;
  padding: ${props => props.theme.paddings.xl} 0;
  overflow: hidden;
`;

const GraphItemLabel = styled.li`
  ${props => props.theme.flex.flexBox('', '', 'space-between')};
  border-bottom: ${props => props.theme.borders.lightGray};
`;

const GprahItemTitle = styled.span`
  width: 33.3%;
  color: ${props => props.theme.colors.gray};
  text-align: right;
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.2;
  padding-bottom: ${props => props.theme.paddings.small};

  &:nth-child(1) {
    text-align: left;
  }
`;

const GraphItemList = styled.li`
  ${props => props.theme.flex.flexBox('', '', 'space-between')};
  padding-top: ${props => props.theme.paddings.small};
`;

const GraphItem = styled.span`
  width: 33.3%;
  text-align: right;
  font-size: ${props => props.theme.fontSizes.small};

  &:nth-child(1) {
    text-align: left;
  }

  &:nth-child(3) {
    font-weight: ${props => props.theme.fontWeights.extraBold};
  }
`;

const GRAPH_MENU_TAB = [
  {
    id: 1,
    tabName: '체결 거래',
  },
  {
    id: 2,
    tabName: '판매 입찰',
  },
  {
    id: 3,
    tabName: '구매 입찰',
  },
];

const GRAPH_ITEM_LABEL = [
  { id: 1, labelName: '사이즈' },
  { id: 2, labelName: '거래가' },
  { id: 3, labelName: '거래일' },
];

export default DealsModal;
