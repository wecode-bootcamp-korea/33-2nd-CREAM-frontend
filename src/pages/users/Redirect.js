import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { API } from '../../config';

const Redirect = () => {
  const url = new URL(window.location.href);
  const code = url.searchParams.get('code');
  const navigate = useNavigate();

  const getToken = () => {
    const url = `${API.KAKAO_LOGIN}?code=${code}`;
    axios.get(url).then(res => {
      if (res.status === 200) {
        localStorage.setItem('access_token', res.data.access_token);
        navigate('/products');
      } else {
        navigate('/login');
        alert('다시 로그인 해주세요');
      }
    });
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  ${props => props.theme.flex.flexBox()}
  height: 100vh;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid lightgray;
  border-radius: 50%;
  border-top: 5px solid white;
  animation: spin 1s linear infinite;

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default Redirect;
