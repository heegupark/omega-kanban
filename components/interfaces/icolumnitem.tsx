import ICard from './icard';

export default interface IColumnItem {
  _id: string;
  title: string;
  cards: Array<ICard>;
  colorIndex: number;
  createdAt: Date;
  updatedAt: Date;
}
