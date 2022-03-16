import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin: 0 3rem;
  padding-top: 1rem;
  height: 92vh;
  font-family: 'Poppins', sans-serif;

  h4 {
    text-transform: capitalize;
    font-size: 14px;
  }

  p {
    text-transform: sentence;
    font-size: 14px;
  }
`;
