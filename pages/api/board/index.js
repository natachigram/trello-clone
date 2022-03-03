import { getBoards, createBoard } from '../../../utils/actions';

export default async function (req, res) {
  try {
    switch (req.method) {
      case 'GET':
        res.json(await getBoards());
        break;
      case 'POST':
        res.json(await createBoard(req.body));
        break;

      default:
        res.status(404).send('NO RESPONSE FOR THAT METHOD');
    }
  } catch (error) {
    res.status(400).json(error);
  }
}
