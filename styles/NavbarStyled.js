import styled from 'styled-components';

export const NavContainer = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  width: 100vw;
  background-color: #026aa7;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: relative;
  font-family: 'Poppins', sans-serif;
`;

export const NavLinks = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-item: center;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: #014a76;
  color: #fff;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 4px;
  width: ${(props) => props.width};
`;

export const Input = styled.input`
  max-width: 20rem;
  border: none;
  cursor: auto;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  outline: none;
`;
