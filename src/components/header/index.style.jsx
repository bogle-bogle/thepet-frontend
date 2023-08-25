import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column; /* 요소들을 세로로 정렬합니다 */
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Divider = styled.hr`
  width: 100%;
  background-color: #f5f5f5;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const MenuItem = styled.p`
  margin: 10px;
`;