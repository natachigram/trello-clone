import Head from 'next/head';
import Board from '../components/Board';
import { Container } from '../styles/IndexStyled';

export default function Home() {
  return (
    <>
      <Container>
        <Board />
      </Container>
    </>
  );
}
