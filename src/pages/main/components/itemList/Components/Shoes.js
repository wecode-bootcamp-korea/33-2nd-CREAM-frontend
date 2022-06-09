import React, { useState } from 'react';
import styled from 'styled-components';

const Category = ({ categorydata, selectShoeSize, filterSelect }) => {
  const [filterTab, setFilterTab] = useState(true);

  const { categoryList, categoryName } = categorydata;

  const handelCategory = () => {
    setFilterTab(!filterTab);
  };

  return (
    <CategoryWrapper>
      <Title>
        <CategoryTag>{categoryName}</CategoryTag>
        <SeeMore onClick={handelCategory}>
          {filterTab === true ? '+' : '-'}
        </SeeMore>
      </Title>
      <List>
        {categoryList.map(category => {
          return (
            <CheckBox
              key={category.id}
              filterTab={filterTab}
              onClick={() => selectShoeSize(category)}
              selected={
                filterSelect !== undefined &&
                filterSelect.find(element => element === category.name)
              }
            >
              {category.name}
            </CheckBox>
          );
        })}
      </List>
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

const List = styled.div`
  color: ${props => props.theme.colors.black};
  display: flex;
  flex-wrap: wrap;
`;

const CheckBox = styled.button`
  display: ${props => (props.filterTab ? 'none' : 'block')};
  margin: 5px;
  border-color: ${props => props.theme.colors.gray};
  border: 1px solid #d3d3d3;
  width: 60px;
  height: 25px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? 'black' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
`;
