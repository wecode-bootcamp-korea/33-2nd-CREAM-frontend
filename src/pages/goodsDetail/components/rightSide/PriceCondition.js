import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ConditionChart from './ConditionChart';
import DealsModal from './DealsModal';

const PriceCondition = () => {
  const [graphData, setgraphData] = useState([]);

  useEffect(() => {
    // fetch('/data/graphData.json')
    fetch('http://13.125.248.213:8000/products/1/orders')
      .then(res => res.json())
      .then(res => {
        setgraphData(res.orders);
      });
  }, []);

  return (
    <ConditionWrapper>
      <ConditionTitle>시세</ConditionTitle>
      <ChartDateMenu>
        {CHART_DATE_MENU.map(data => (
          <DateMenuItem key={data.id}>{data.name}</DateMenuItem>
        ))}
      </ChartDateMenu>
      <ChartContainer>
        <ConditionChart graphData={graphData} />
        <GraphTabWrapper>
          {GRAPH_MENU_TAB.map(data => (
            <GraphTabBtn key={data.id}>{data.tabName}</GraphTabBtn>
          ))}
        </GraphTabWrapper>
        <GraphItemWraper>
          <GraphItemLabel>
            {GRAPH_ITEM_LABEL.map(data => (
              <GprahItemTitle key={data.id}>{data.labelName}</GprahItemTitle>
            ))}
          </GraphItemLabel>
          {graphData
            .map(data => (
              <GraphItemList key={data.id}>
                <GraphItem>{data.size}</GraphItem>
                <GraphItem>{`${data.price.toLocaleString()}원`}</GraphItem>
                <GraphItem>{data.created_at}</GraphItem>
              </GraphItemList>
            ))
            .slice(0, 5)}
        </GraphItemWraper>
        <DealsModal />
      </ChartContainer>
    </ConditionWrapper>
  );
};

const ConditionWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', 'flex-start', 'flex-start')};
  margin-top: ${props => props.theme.margins.xxxl};
`;

const ConditionTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  margin-bottom: ${props => props.theme.margins.base};
`;

const ChartDateMenu = styled.ul`
  ${props => props.theme.flex.flexBox('', '', 'space-between')};
  width: 35rem;
  padding: 0.125rem;
  background-color: ${props => props.theme.colors.lightGray};
  margin-bottom: ${props => props.theme.margins.xl};
  border-radius: 0.625rem;
`;

const DateMenuItem = styled.li`
  width: 7rem;
  height: 2rem;
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.small};
  text-align: center;
  padding: ${props => props.theme.paddings.small};
  border-radius: 0.5rem;
  cursor: pointer;

  &:nth-child(5) {
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fontWeights.semiBold};
    background-color: ${props => props.theme.colors.white};
  }
`;

const ChartContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'flex-start', 'flex-start')};
  width: 35rem;
`;

const GraphTabWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', '', 'space-between')};
  width: 35rem;
  padding: 0.125rem;
  background-color: ${props => props.theme.colors.lightGray};
  margin-top: ${props => props.theme.margins.xl};
  border-radius: 0.625rem;
`;

const GraphTabBtn = styled.button`
  width: 33.3%;
  height: 2rem;
  color: ${props => props.theme.colors.darkGray};
  background-color: transparent;
  font-size: ${props => props.theme.fontSizes.small};
  text-align: center;
  padding: ${props => props.theme.paddings.small};
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;

  &:nth-child(1) {
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fontWeights.semiBold};
    background-color: ${props => props.theme.colors.white};
  }
`;

const GraphItemWraper = styled.ul`
  width: 35rem;
  padding: ${props => props.theme.paddings.xl} 0;
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
`;

const CHART_DATE_MENU = [
  {
    id: 1,
    name: '1개월',
  },
  {
    id: 2,
    name: '3개월',
  },
  {
    id: 3,
    name: '6개월',
  },
  {
    id: 4,
    name: '1년',
  },
  {
    id: 5,
    name: '전체',
  },
];

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

export default PriceCondition;
