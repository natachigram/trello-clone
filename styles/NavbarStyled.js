import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100vw;
  background-color: #026aa7;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: relative;
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
`;

export const Input = styled.input`
  max-width: 20rem;
  border: none;
  cursor: auto;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  outline: none;
`;
