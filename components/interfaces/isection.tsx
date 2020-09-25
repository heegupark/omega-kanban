import ICard from './icard';

export default interface ISection {
  id: string;
  title: string;
  cards: Array<ICard>;
  colorIndex: number;
  createdAt: Date;
  updatedAt: Date;
}
