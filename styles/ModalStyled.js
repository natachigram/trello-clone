import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 300%;
  left: 40%;
  background-color: #fff;
  box-shadow: 3px 7px 20px -5px rgba(0, 0, 0, 0.34);
  -webkit-box-shadow: 3px 7px 20px -5px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 3px 7px 20px -5px rgba(0, 0, 0, 0.34);
  height: 10rem;
  width: 16rem;
  border-radius: 4px;
`;
export const Heading = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  flex: 0.1;
  font-weight: 300;
  text-align: center;
  color: #202b35;
  border-bottom: 1px solid #606060;
  padding: 0.8rem;
  padding-bottom: 0.5rem;

  span {
    font-weight: 600;
    cursor: pointer;
  }
`;
export const ModalText = styled.div`
  flex: 0.9;
  border-radius 4px;
  padding: 0.8rem;
  cursor: pointer;

  p,
  h4 {
    margin-top: 0.2rem;
    font-size: 14px;
    color: #202b35;
  }

  h4{
      font-weight: 300;
  }

  &:hover {
    background-color: #f3f9ff;
    
  }
`;
