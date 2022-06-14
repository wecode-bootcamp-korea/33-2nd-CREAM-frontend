import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import LeftContents from './components/LeftContents';
import RightContents from './components/RightContents';
import StickySummary from './components/rightSide/StickySummary';
import { BASE_URL } from '../../config';

const GoodsDetail = () => {
  const [goodsData, setGoodsData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}products/${id}`)
      .then(res => res.json())
      .then(res => setGoodsData(res));
  }, [id]);

  return (
    <main>
      {Object.values(goodsData).map(data => (
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
  ${({ theme }) => theme.flex.flexBox('', '', '')}
  position: relative;
  max-width: 80rem;
  height: 122.6rem;
  margin: auto;
  margin-bottom: 148px;
  padding: 7rem ${props => props.theme.paddings.xxxl} 0rem;
`;

export default GoodsDetail;
