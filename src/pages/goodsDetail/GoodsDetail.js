import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftContents from './components/LeftContents';
import RightContents from './components/RightContents';
import StickySummary from './components/rightSide/StickySummary';

const GoodsDetail = () => {
  const [goodsData, setGoodsData] = useState([]);

  useEffect(() => {
    fetch('/data/goodsData.json')
      .then(res => res.json())
      .then(res => setGoodsData(res));
  }, []);

  return (
    <main>
      {goodsData.map(data => (
        <React.Fragment key={data.id}>
          <StickySummary data={data} />
          <ContentsWrapper>
            <LeftContents data={data} />
            <RightContents data={data} />
          </ContentsWrapper>
        </React.Fragment>
      ))}
    </main>
  );
};

const ContentsWrapper = styled.div`
  position: relative;
  max-width: 80rem;
  height: 114rem;
  margin: auto;
  padding: 2rem ${props => props.theme.paddings.xxxl} 7.5rem;
`;

export default GoodsDetail;
