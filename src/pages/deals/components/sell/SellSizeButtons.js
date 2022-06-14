import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../../../config';

const SellSizeButtons = ({ selectedSize, handlePostSize }) => {
  const [sizeButton, setSizeButton] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // fetch('data/goodsData.json')
    fetch(`${BASE_URL}products/${id}/bids?type=sell`)
      .then(res => res.json())
      .then(res => {
        setSizeButton(res.bid_list);
      });
  }, [id]);

  return (
    <ButtonsWrapper>
      {Object.values(sizeButton).map(sizeData => (
        <SizeButtonItem
          key={sizeData.product_size_id}
          name={sizeData.size_name}
          onClick={() => handlePostSize(sizeData.size_name)}
          isSelected={selectedSize === sizeData.size_name}
        >
          <SizeLabel>{sizeData.size_name}</SizeLabel>
          <SizePrice isColored={`${sizeData.price ? 'colored' : 'black'}`}>
            {sizeData.price ? `${sizeData.price}` : '판매입찰'}
          </SizePrice>
        </SizeButtonItem>
      ))}
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', '', '')};
  flex-flow: row wrap;
  padding: ${props => props.theme.margins.xl} 0;
  border-bottom: ${props => props.theme.borders.lightGray};
`;

const SizeButtonItem = styled.button`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 32.4%;
  height: 3.625rem;
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colors.black : theme.colors.lightGray};
  margin: ${props => props.theme.margins.xs};
  background-color: ${props => props.theme.colors.white};
  border-radius: 0.625rem;
  cursor: pointer;

  &:nth-child(3n + 1) {
    margin-left: 0;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

const SizeLabel = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
`;

const SizePrice = styled.span`
  color: ${props => {
    if (props.isColored === 'colored') {
      return props.theme.colors.green;
    } else {
      return props.theme.colors.darkGray;
    }
  }};
  font-size: ${props => props.theme.fontSizes.xs};
`;

export default SellSizeButtons;
