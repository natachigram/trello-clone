import { connection, Board } from './connection';

//get all boards
export const getBoards = async () => await Board.find({});

//get a single board
export const getBoard = async (id) => await Board.findById(id);

// create boards
export const createBoard = async (newBoard) => await Board.create(newBoard);

//update boards

export const updateBoard = async (id, updateBoard) =>
  await Board.findByIdAndUpdate(id, updateBoard, { new: true });

//delete boards
export const destroyBoard = async (id) => await Board.findByIdAndRemove(id);
