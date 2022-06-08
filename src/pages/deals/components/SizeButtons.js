import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SizeButtons = () => {
  const [sizeButton, setSizeButton] = useState([]);

  useEffect(() => {
    fetch('/data/sizeData.json')
      .then(res => res.json())
      .then(res => {
        setSizeButton(res);
      });
  }, []);

  return (
    <ButtonsWrapper>
      {sizeButton.map(sizeData => (
        <SizeButtonItem key={sizeData.id}>
          <SizeLabel>{sizeData.size}</SizeLabel>
          <SizePrice
            isColored={`${sizeData.price.length > 0 ? 'colored' : 'black'}`}
          >
            {sizeData.price.length > 0 ? `${sizeData.price}` : '구매입찰'}
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
  border: ${props => props.theme.borders.lightGray};
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
      return props.theme.colors.red;
    } else {
      return props.theme.colors.darkGray;
    }
  }};
  font-size: ${props => props.theme.fontSizes.xs};
`;

export default SizeButtons;
