import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from './LoginData';

const Login = () => {
  return (
    <Container>
      <Logo>CREAM</Logo>

      <LoginForm>
        <Label htmlFor="id">이메일 주소</Label>
        <Input
          id="id"
          placeholder="예) cream@cream.co.kr"
          onfocus="placeholder = ''"
        />
      </LoginForm>

      <LoginForm>
        <Label htmlFor="pw">비밀번호</Label>
        <Input id="pw" />
      </LoginForm>

      <LoginBtn>로그인</LoginBtn>
      <KakaoBtn as="a" href={KAKAO_AUTH_URL}>
        카카오로 로그인
      </KakaoBtn>
    </Container>
  );
};

const Container = styled.section`
  ${props => props.theme.flex.flexBox('column')}
  margin: auto;
  margin-top: 9.375rem;
  max-width: 25rem;
`;

const Logo = styled.h1`
  margin-bottom: 2.8rem;
  font-size: ${props => props.theme.fontSizes.titleSize};
  font-weight: bold;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.margins.xxl};
  width: 100%;
  height: 4.375rem;
`;

const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.small};
  padding-bottom: ${props => props.theme.paddings.base};
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ebebeb;
  padding: ${props => props.theme.paddings.base} 0;
  font-size: ${props => props.theme.fontSizes.small};

  &:focus {
    outline: none;
    border-bottom: 2px solid black;

    ::placeholder {
      opacity: 0;
    }
  }

  ::placeholder {
    color: #bbb;
    opacity: 1;
  }
`;

const LoginBtn = styled.button`
  background: #ebebeb;
  width: 100%;
  margin: ${props => props.theme.margins.xl};
  padding: ${props => props.theme.paddings.large};
  border: none;
  border-radius: 10px;
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

const KakaoBtn = styled(LoginBtn)`
  margin-top: -0.625rem;
  border: ${props => props.theme.borders.lightGray};
  background: transparent;
  color: black;
  text-align: center;
  text-decoration: none;
`;

export default Login;
