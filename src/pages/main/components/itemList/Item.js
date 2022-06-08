import React from 'react';
import styled from 'styled-components';

const Item = ({ productNameEn, productNameKr, price, src }) => {
  const getRandomNumber = max => {
    return (Math.random() * max).toFixed(1);
  };

  return (
    <ItemComponent>
      <ItemImg src={src} />
      <ItemTitle>
        <Description>
          <ItemNameEn>{productNameEn}</ItemNameEn>
          <ItemNameKr>{productNameKr}</ItemNameKr>
        </Description>
        <Amount>
          <Price>{price}원</Price>
          <PriceDescription>즉시 구매가</PriceDescription>
        </Amount>
      </ItemTitle>
      <Interests>
        <BookMark>
          <BookMarkIcon src="/images/ItemList/bookmark.png" alt="icon" />
          <BookMarkNum>{getRandomNumber(20)}만</BookMarkNum>
        </BookMark>
        <Likes>
          <LikesIcon src="/images/ItemList/like.png" alt="icon" />
          <LikesNum>{getRandomNumber(10)}만</LikesNum>
        </Likes>
      </Interests>
    </ItemComponent>
  );
};

export default Item;

const getRandomColor = () => {
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};

const backgroundColors = [
  'lavender',
  'lavenderblush',
  'linen',
  'powderblue',
  'thistle',
];

const ItemComponent = styled.div`
  margin-bottom: ${props => props.theme.margins.xxxl};
`;

const ItemImg = styled.img`
  width: 14rem;
  background-color: ${getRandomColor};
  border-radius: 10px;
  cursor: pointer;
`;

const ItemTitle = styled.div`
  margin-top: ${props => props.theme.margins.xl};
  cursor: pointer;
`;

const Description = styled.div`
  margin-bottom: ${props => props.theme.margins.small};
  font-size: ${props => props.theme.fontSizes.small};
`;

const ItemNameEn = styled.div``;

const ItemNameKr = styled.div`
  color: ${props => props.theme.colors.gray};
`;

const Amount = styled.div`
  margin-bottom: ${props => props.theme.margins.base};
`;

const Price = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;

const PriceDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.gray};
`;

const Interests = styled.div`
  ${props => props.theme.flex.flexBox('_', '_', 'left')}
  font-size: ${props => props.theme.fontSizes.xs};
`;

const BookMark = styled.div`
  margin-right: 1rem;
  ${props => props.theme.flex.flexBox}
`;

const BookMarkIcon = styled.img`
  width: 1rem;
  cursor: pointer;
`;

const BookMarkNum = styled.span`
  margin-left: ${props => props.theme.margins.small};
`;

const Likes = styled.div`
  ${props => props.theme.flex.flexBox('_', 'baseline', '_')}
  margin-left: ${props => props.theme.margins.small};
`;

const LikesIcon = styled.img`
  width: 1rem;
  cursor: pointer;
`;

const LikesNum = styled.span`
  margin-left: ${props => props.theme.margins.small};
`;
