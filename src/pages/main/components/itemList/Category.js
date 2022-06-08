import React from 'react';
import styled from 'styled-components';

const Category = ({ categoryName, categoryList }) => {
  return (
    <CategoryWrapper>
      <Title>
        <CategoryTag>{categoryName}</CategoryTag>
        <SeeMore>+</SeeMore>
      </Title>
      <List>{categoryList}</List>
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 1rem 0.5rem;
`;

const Title = styled.div`
  ${props => props.theme.flex.flexBox('_', '_', 'space-between')}
`;

const CategoryTag = styled.p`
  display: block;
  font-size: ${props => props.theme.fontSizes.small};
`;

const SeeMore = styled.button`
  background: none;
  border: none;
  font-size: ${props => props.theme.fontSizes.xxl};
  cursor: pointer;
`;

const List = styled.p`
  color: ${props => props.theme.colors.gray};
`;
