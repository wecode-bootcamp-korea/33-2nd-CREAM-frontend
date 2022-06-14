import React from 'react';
import { FaBold, FaRegEnvelope, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIcons>
        <FaRegEnvelope />
        <FaInstagram />
        <FaBold />
      </FooterIcons>
      <Contents>이용안내</Contents>
      <Contents>고객지원</Contents>
      <Contents>고객센터 1588-7813</Contents>
      <ContentDetails>
        크림 주식회사 · 대표김창욱 사업자등록번호:
        570-88-01618사업자정보확인통신판매업:제 2021-성남분당C-0093호 <br />
        사업장소재지:경기도 성남시 분당구 분당내곡로 117,
        8층개인정보관리책임자:김미진호스팅 서비스:네이버 클라우드 (주)
      </ContentDetails>
      <Reserved> © KREAM Corp. </Reserved>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding-top: ${props => props.theme.paddings.xxxl};
  text-align: center;
`;

const FooterIcons = styled.div`
  cursor: pointer;
  svg {
    margin-right: ${props => props.theme.margins.large};
    margin-bottom: ${props => props.theme.margins.xxl};
    font-size: ${props => props.theme.fontSizes.xxl};

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Contents = styled.span`
  margin-top: ${props => props.theme.margins.xxxl};
  padding: ${props => props.theme.paddings.large};
  cursor: pointer;
`;

const ContentDetails = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  padding: ${props => props.theme.paddings.xl};
  color: gray;
`;
const Reserved = styled.div`
  font-weight: bold;
  padding: ${props => props.theme.paddings.xl};
  margin-bottom: ${props => props.theme.margins.xxxl};
`;
