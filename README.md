# 33기 2차 프로젝트 - cream

## 개요

- 크림 웹페이지 클론코딩 프로젝트
- 클론코딩은 개발 환경 셋팅부터 시작하였으며, 하단 시연 영상은 모두 백엔드와의 데이터 연동을 통해 실제 서비스에서 이용되는 수준으로 구현하였습니다.
- 프로젝트는 11일동안 진행됨에 따라 디자인과 아래 서술한 기능들만 선택하여 구현했습니다.
  - Nav Bar & Footer
  - 소셜 로그인 & 회원가입
  - 상품 페이지
  - 상품 상세
  - 매매입찰

## 팀원

`Front-End`

- 김슬비, 유지후, 이윤섭, 장수연

`Back-End`

- 강세영

## 사용한 기술

`Front-End`

- React, Javascript, Styled-Component

`Back-End`

- Django, Python, MySQL, AWS(RDS, EC2), Bcrypt, JWT, django-cors

`Cowork`

- Git, Slack, Trello

## 시연 연상

https://youtu.be/v58DAx5gJzE

## 구현 기능

- Nav Bar & Footer, 소셜 로그인 & 회원가입 (김슬비)

  (img 링크)
  
  - Nav Bar & Footer

    ```
    - 내용을 적어주세요.
    ```
    
  (img 링크)
  
  - 소셜 로그인 & 회원가입

    ```
    - 내용을 적어주세요.
    ```
    
- 상품 상세 페이지 & 구매 입찰 (이윤섭)

![cream_1](https://user-images.githubusercontent.com/102455161/174475523-1a407108-6307-4aa7-bbce-b7fc267855c5.gif)
![cream_2](https://user-images.githubusercontent.com/102455161/174475512-90781ab4-c6f5-4f39-b0d7-db25aca242b3.gif)
![cream_3](https://user-images.githubusercontent.com/102455161/174475555-9991df9c-aa84-48c1-8286-e2daac4d4f07.gif)


  ```
  - 스크롤 이벤트를 이용하여 하단 스크롤시 화면 상단에 상품 quick menu 노출
  - chart.js 라이브러리를 사용하여 매매 데이터를 시각화
  - 상품 구매 입찰시 선택한 사이즈와 입찰 희망 가격을 fetch POST로 전송, 판매 입찰시 해당 가격이 노출되도록 구현(금액은 해당 사이즈의 최대값으로만 노출)
  ```
