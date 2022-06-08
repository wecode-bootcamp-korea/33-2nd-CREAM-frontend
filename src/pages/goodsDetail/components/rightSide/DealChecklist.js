import React from 'react';
import styled from 'styled-components';
import { VscChevronDown } from 'react-icons/vsc';

const DealChecklist = () => {
  return (
    <ChecklistWrapper>
      <ChecklistTitle>구매 전 꼭 확인해주세요!</ChecklistTitle>
      {CHECKLIST_MENU.map(checklist => (
        <ChecklistItem key={checklist.id}>
          <ChecklistMenu>{checklist.title}</ChecklistMenu>
          <ChecklistIcon />
        </ChecklistItem>
      ))}
      <CheckNoticeWrapper>
        {CHECK_NOTICE_LIST.map(checknotice => (
          <NoticeWrapper key={checknotice.id}>
            <NoticeIcon src={checknotice.imgURL} />
            <NoticeTextWrapper>
              <NoticeTitle>{checknotice.title}</NoticeTitle>
              <NoticeDesc>{checknotice.content}</NoticeDesc>
            </NoticeTextWrapper>
          </NoticeWrapper>
        ))}
      </CheckNoticeWrapper>
      <SalesNotice>
        크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은
        개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은
        각 판매자에게 있습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한
        책임은 크림(주)에 있습니다.
      </SalesNotice>
    </ChecklistWrapper>
  );
};

const ChecklistWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column', 'flex-start', 'flex-start')};
  margin-top: ${props => props.theme.margins.xxxl};
`;

const ChecklistTitle = styled.p`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  padding-bottom: ${props => props.theme.paddings.base};
  border-bottom: ${props => props.theme.borders.lightGray};
`;

const ChecklistItem = styled.div`
  ${props => props.theme.flex.flexBox('', 'flex-start', 'space-between')};
  width: 100%;
  padding-top: ${props => props.theme.paddings.xl};
  padding-bottom: ${props => props.theme.paddings.large};
  border-bottom: ${props => props.theme.borders.lightGray};
  cursor: pointer;
`;

const ChecklistMenu = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
`;

const ChecklistIcon = styled(VscChevronDown)``;

const CheckNoticeWrapper = styled.div`
  margin-top: ${props => props.theme.margins.xxxl};
`;

const NoticeWrapper = styled.div`
  ${props => props.theme.flex.flexBox('', 'flex-start', 'flex-start')};
  margin-top: ${props => props.theme.margins.xl};

  &:first-child {
    margin-top: 0;
  }
`;

const NoticeIcon = styled.img`
  margin-right: ${props => props.theme.margins.xl};
`;

const NoticeTextWrapper = styled.div`
  font-size: 0.813rem;
`;

const NoticeTitle = styled.p`
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;

const NoticeDesc = styled.p`
  color: ${props => props.theme.colors.darkGray};
  font-weight: ${props => props.theme.fontWeights.light};
`;

const SalesNotice = styled.p`
  color: ${props => props.theme.colors.gray};
  margin-top: ${props => props.theme.margins.xl};
  padding-top: ${props => props.theme.paddings.xxxl};
  font-size: ${props => props.theme.fontSizes.xs};
  border-top: ${props => props.theme.borders.lightGray};
`;

const CHECKLIST_MENU = [
  {
    id: 1,
    title: '배송 기간 안내',
  },
  {
    id: 2,
    title: '검수 안내',
  },
  {
    id: 3,
    title: '구매 환불/취소/교환 안내',
  },
];

const CHECK_NOTICE_LIST = [
  {
    id: 1,
    title: '100% 정품 보증',
    content:
      'KREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.',
    imgURL: 'https://kream.co.kr/_nuxt/img/img-guide-item-01.fa306b8.svg',
  },
  {
    id: 2,
    title: '엄격한 다중 검수',
    content:
      '모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.',
    imgURL: 'https://kream.co.kr/_nuxt/img/img-guide-item-01.fa306b8.svg',
  },
  {
    id: 3,
    title: '정품 인증 패키지',
    content:
      '검수에 합격한 경우에 한하여 KREAM의 정품 인증 패키지가 포함된 상품이 배송됩니다.',
    imgURL: 'https://kream.co.kr/_nuxt/img/img-guide-item-01.fa306b8.svg',
  },
];

export default DealChecklist;
