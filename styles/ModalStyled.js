import styled from 'styled-components';

export const Modal = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 300%;
  left: 37%;
  right: 35%;
  border-radius: 14px;
  border-radius: 14px;
  background: #f7f7f8;
  box-shadow: 7px 7px 14px #bcbcbc, -7px -7px 14px #ffffff;
  max-height: 20rem;
  width: 23%;
  border-radius: 4px;
  padding: 0.8rem;
  font-family: 'Poppins', sans-serif;
`;
export const Heading = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  flex: 0.2;
  font-weight: 300;
  text-align: center;
  color: #202b35;
  border-bottom: 1px solid #606060;
  padding-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;

  span {
    font-weight: 600;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
`;
export const ModalText = styled.div`
  flex: 0.4;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  margin-top: 0.2rem;
  border-radius: 4px;
  transition: 0.25s ease-in-out;

  p,
  h4 {
    margin-top: 0.2rem;
    font-size: 14px;
    color: #202b35;
  }

  h4 {
    font-weight: 300;
  }

  &:hover {
    background-color: #e8e8e8;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;
export const Input = styled.input`
  outline: none;
  height: 2rem;
  border: none;
  border-radius: 5px;
  background: #f7f7f8;
  box-shadow: inset 8px 8px 22px #e3e3e4, inset -8px -8px 22px #ffffff;
  width: 100%;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
  transition: 0.25s ease-in-out;

  &:focus {
    border-left: 0.35rem solid #026aa7;
  }
`;
export const Textarea = styled.textarea`
  margin-bottom: 0.5rem;
  outline: none;
  padding: 0.5rem 0.5rem;
  max-height: 4rem;
  max-width: 100%;
  min-height: 2rem;
  min-width: 100%;
  border: none;
  border-radius: 5px;
  background: #f7f7f8;
  box-shadow: inset 8px 8px 22px #e3e3e4, inset -8px -8px 22px #ffffff;
  transition: 0.25s ease-in-out;

  &:focus {
    border-left: 0.35rem solid #026aa7;
  }
`;
