import React, { useEffect, useState } from 'react';
// import { API } from '../../../src/config.js';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  const creamToken = localStorage.getItem('cream_token');
  // const navigate = useNavigate();

  useEffect(() => {
    creamToken && setIsLogin(true);
  }, []);

  // 마이페이지 제작 후 처리할 로직
  // const goToMypage = () => {
  //   creamToken
  //     ? fetch(`${API.USERS}`, {
  //         method: 'GET',
  //         headers: {
  //           Authorization: creamToken,
  //         },
  //       })
  //         .then(res => {
  //           if (res.ok) {
  //             return res.json();
  //           }
  //         })
  //         .then(() => {
  //           console.log('');
  //           navigate('/마이페이지');
  //         })
  //     : navigate(`/login`);
  // };

  return (
    <Container>
      <Logo>CREAM</Logo>
      <ButtonContainer>
        <Button>STYLE</Button>
        <Button>SHOP</Button>
        <Button>ABOUT</Button>
        {isLogin ? (
          <Button
          // onClick={() => {
          //   goToMypage();
          // }}
          >
            MYPAGE
          </Button>
        ) : (
          <Button login>LOGIN</Button>
        )}
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', 'space-between')}
  padding: 0 ${props => props.theme.paddings.xxxl};
  height: 4.25rem;
  border-bottom: 1px solid #cecece;
`;

const Logo = styled.h1`
  color: black;
  font-size: ${props => props.theme.fontSizes.xxl};
  cursor: pointer;
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
  margin: 0 ${props => props.theme.margins.base};
  border: 0;
  color: black;
  font-size: ${props => props.theme.fontSizes.base};
  background: none;
  cursor: pointer;

  ${props =>
    props.login &&
    `
  color: gray;
  `}
`;

export default Nav;
