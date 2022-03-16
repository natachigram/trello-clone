import Head from 'next/head';
import { Container } from '../styles/IndexStyled';
import { getBoards } from '../utils/actions';
import { Box } from '../styles/BoardStyled';
export default function Home({ boards }) {
  return (
    <>
      <Container>
        {boards.map((board) => {
          return (
            <Box key={board.id}>
              <h4>{board.title}</h4>
              <p> {board.body}</p>
              <button>Completed</button>
            </Box>
          );
        })}
      </Container>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const boards = JSON.parse(JSON.stringify(await getBoards()));

  return {
    props: {
      boards,
    },
  };
}
