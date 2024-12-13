## React Basic 강의 콘텐츠: Unsplash Image API를 활용한 이미지 검색 사이트 만들기
### 개발환경

1.  프로젝트 환경설정(vite를 활용한 React 설치): `npm install vite@latest` <br />
2.  React 중앙집중식 상태관리 라이브러리 Recoil 설치: `npm install recoil` <br />
3.  외부 오픈 API 통신을 위한 라이브러리 Axios 설치: `npm install axios` <br />
4.  CSS 스타일링을 위한 SASS/SCSS 설치: `npm install -D sass` <br />
5.  React Router 설치: `npm install react-router-dom localforage match-sorter sort-by` <br />
6.  TypeScript에서 Node.js 모듈을 쓸 수 있는 환경 구축 : `npm i @types/node` <br />
7.  React Toast Popup 모듈 설치 : `npm install react-simple-toasts` <br />

### 트러블 슈팅
1. 영상 15강 부분에서 tag.title이 정상적으로 출력이 안됨.
- map을 사용할 수 없다는 오류 출력.
- 이런 경우엔 받아온 데이터값이 배열이 아니거나 없을 경우가 있다고 함
- unsplash api의 response를 확인해 보니 tags가 사라져있음.
- 강의를 듣더라도 restapi 부분의 DTO는 직접 작성해보기