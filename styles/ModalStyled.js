import styled from 'styled-components';

export const Modal = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 300%;
  left: 40%;
  background-color: #fff;
  box-shadow: 3px 7px 20px -5px rgba(0, 0, 0, 0.34);
  -webkit-box-shadow: 3px 7px 20px -5px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 3px 7px 20px -5px rgba(0, 0, 0, 0.34);
  max-height: 16rem;
  width: 16rem;
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
    background-color: #f3f9ff;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;
export const Input = styled.input`
  background-color: #e5e5e5;
  outline: none;
  height: 2rem;
  border: none;
  border-radius: 4px;
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
  border-radius: 4px;
  background-color: #e5e5e5;
  transition: 0.25s ease-in-out;

  &:focus {
    border-left: 0.35rem solid #026aa7;
  }
`;
