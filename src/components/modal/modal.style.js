import styled from 'styled-components';

export const ModalBackGround = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);

  position: fixed;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalMain = styled.div`
  background-color: white;

  display: inline-flex;

  width: auto;
  height: auto;
  overflow: auto;
`;

export const TestDiv = styled.div`
  border: 1px solid red;
  width: 500px;
  height: 500px;
`;
