// '/api/board'

import { getBoard, updateBoard, destroyBoard } from '../../../utils/actions';

export default async function (req, res) {
  //gets the id
  const id = req.query.id;
  try {
    switch (req.method) {
      case 'GET':
        res.json(await getBoard(id));
        break;
      case 'PUT':
        res.json(await updateBoard(id, req.body));
        break;
      case 'DELETE':
        res.json(await destroyBoard(id, req.body));
        break;

      default:
        res.status(404).send('NO RESPONSE FOR THAT METHOD');
    }
  } catch (error) {
    res.status(400).json(error);
  }
}
